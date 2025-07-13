import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ConfigResolverService } from '@app/core/services/config-resolver.service';
import { TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgFor, NgIf, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private config = inject(ConfigResolverService);

  // Observable with all dynamic imports (menu items)
  menuItems$ = this.config.getConfig().pipe(map((cfg) => cfg.imports ?? []));
}
