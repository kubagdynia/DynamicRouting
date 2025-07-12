import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigResolverService } from './core/services/config-resolver.service';
import { Observable, tap } from 'rxjs';
import { FrontConfigModel } from './shared/models/front-config.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Moja aplikacja Angular 18 (standalone)</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public configReady$: Observable<FrontConfigModel>;

  private readonly configResolverService = inject(ConfigResolverService);
  ngOnInit() {
    this.initConfig();
    console.log('Aplikacja została zainicjowana');
  }

  initConfig() {
    this.configReady$ = this.configResolverService.getConfig().pipe(
      tap((res) => {
        if (res?.imports) {
          this.initMenu(res.imports);
        }
      }),
    );

    this.configReady$.subscribe();
    console.log('Inicjalizacja konfiguracji aplikacji');
  }
  private initMenu(imports: FrontConfigModel['imports']) {
    if (imports && imports.length > 0) {
      console.log('Inicjalizacja menu z importami:', imports);
      // Logika inicjalizacji menu
    } else {
      console.log('Brak importów do inicjalizacji menu');
    }
  }
}
