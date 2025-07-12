import { Observable, shareReplay, map } from 'rxjs';
import { MyApiService } from './my-api.service';
import { inject, Injectable } from '@angular/core';
import { FrontConfigModel } from '@app/shared/models/front-config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigResolverService {
  private readonly MyApiService = inject(MyApiService);
  private config$: Observable<FrontConfigModel> | null = null;

  getConfig(): Observable<FrontConfigModel> {
    this.config$ ??= this.MyApiService.getFrontConfig().pipe(
      map((config) => {
        return config as FrontConfigModel;
      }),
      shareReplay(1),
    );

    return this.config$;
  }
}
