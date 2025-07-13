import { Component, inject, OnInit } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { ConfigResolverService } from './core/services/config-resolver.service';
import { FrontConfigModel } from './shared/models/front-config.model';
import { routes } from './app.routes';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { GlobalErrorComponent } from './shared/components/global-error/global-error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, GlobalErrorComponent],
  template: `
    <div style="display:flex;">
      <app-sidebar></app-sidebar>
      <main style="flex:1;padding:2rem;">
        <app-global-error></app-global-error>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppComponent implements OnInit {
  private readonly configResolverService = inject(ConfigResolverService);
  private readonly router = inject(Router);

  // Function for lazy loading the import component (can be replaced with dynamic map)
  private importCmp: () => Promise<any> = () =>
    import('./features/import/import.component').then((m) => m.ImportComponent);

  ngOnInit() {
    // Subscribe to config changes and update dynamic routes after config is loaded
    this.configResolverService.getConfig().subscribe((res) => {
      if (res?.imports) {
        this.updateDynamicRoutes(res.imports);
      }
    });
  }

  /**
   * Updates the router's children with dynamically loaded routes based on config.
   * @param imports Array of import definitions from the configuration API
   */
  private updateDynamicRoutes(imports: FrontConfigModel['imports']) {
    // Build dynamic children based on imports array from the API
    const dynamicChildren: Route[] = (imports ?? []).map((imp) => {
      return {
        path: imp.routerLink.replace(/^\//, ''),
        loadComponent: this.importCmp, // Currently same component for all; can be made dynamic per import
        data: {
          code: imp.code,
          label: imp.label,
          synchronizationEnabled: imp.synchronizationEnabled,
        },
      } as Route;
    });

    // Find the root route (path: '') to add dynamic children to
    const root = routes.find((r) => r.path === '');
    // If root exists, merge dynamic children with existing static routes
    // and ensure the fallback route ('**') is at the end
    if (root && root.children) {
      const fallback = root.children.find((c) => c.path === '**');
      const staticChildren = root.children.filter((c) => c.path !== '**');

      // Merge static and dynamic children, with fallback at the end
      root.children = [...staticChildren, ...dynamicChildren];
      if (fallback) root.children.push(fallback);

      // Apply the updated route configuration at runtime
      this.router.resetConfig(routes);
    }
  }
}
