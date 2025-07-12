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
          label: 'Import 1',
          routerLink: '/c1',
          synchronizationEnabled: true,
        },
        {
          code: 'import2',
          label: 'Import 2',
          routerLink: '/c2',
          synchronizationEnabled: false,
        },
      ],
    });
  }
}
