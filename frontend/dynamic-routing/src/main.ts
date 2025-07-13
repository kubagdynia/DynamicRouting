import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from '@app/app.component';
import { TranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    appRef.injector.get(TranslateService).setDefaultLang('en'); // Set default language
    appRef.injector.get(TranslateService).use('en'); // Use English language
  })
  .catch((err) => console.error(err));
