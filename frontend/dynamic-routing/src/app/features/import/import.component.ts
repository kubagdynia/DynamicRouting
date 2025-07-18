import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '@app/core/services/error.service';
import { TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [AsyncPipe, NgIf, TranslateModule],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css',
})
export class ImportComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private errorService = inject(ErrorService);

  code$ = this.route.data.pipe(map((d) => d['code']));
  label$ = this.route.data.pipe(map((d) => d['label']));
  synchronizationEnabled$ = this.route.data.pipe(map((d) => d['synchronizationEnabled']));

  ngOnInit(): void {
    this.errorService.addError('Błąd połączenia z serwerem: ' + this.route.snapshot.data['code']);
  }
}
