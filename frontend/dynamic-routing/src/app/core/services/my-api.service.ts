import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FrontConfigModel } from '@app/shared/models/front-config.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {
  private readonly baseUrl = '/api/my-app';
  private readonly http = inject(HttpClient);

  getFrontConfig(): Observable<FrontConfigModel> {
    //return this.http.get<FrontConfigModel>(`${this.baseUrl}/front-config`);
    console.log('Fetching front config from API');
    return of({
      chat: {
        enabled: true,
      },
      url: {
        portal: 'https://example.com',
      },
      imports: [
        {
          code: 'import1',
          label: 'Verify Import import 1',
          routerLink: '/c1',
          synchronizationEnabled: true,
        },
        {
          code: 'import2',
          label: 'IMPORT.LABEL2',
          routerLink: '/c2',
          synchronizationEnabled: false,
        },
        {
          code: 'import3',
          label: 'IMPORT.LABEL3',
          routerLink: '/c3',
          synchronizationEnabled: false,
        },
        {
          code: 'import4',
          label: 'IMPORT.LABEL4',
          routerLink: '/c4',
          synchronizationEnabled: false,
        },
        {
          code: 'import5',
          label: 'Import 5',
          routerLink: '/c5',
          synchronizationEnabled: true,
        },
      ],
    });
  }
}
