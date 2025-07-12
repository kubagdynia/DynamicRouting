import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NZ_DATE_CONFIG } from 'ng-zorro-antd/i18n';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })),
    importProvidersFrom(
      BrowserAnimationsModule,
      NgxsModule.forRoot([], {
        compatibility: {
          strictContentSecurityPolicy: true,
        },
        executionStrategy: NoopNgxsExecutionStrategy,
        developmentMode: !environment.production,
        selectorOptions: {
          suppressErrors: true,
        },
      }),
      TranslateModule.forRoot(),
    ),
    provideHttpClient(),
    NzNotificationService,
    { provide: NZ_DATE_CONFIG, useValue: { firstDayOfWeek: 1 } }, // Monday as the first day of the week
  ],
};
