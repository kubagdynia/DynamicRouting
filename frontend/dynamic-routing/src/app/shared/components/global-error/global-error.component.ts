import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ErrorService } from '@app/core/services/error.service';

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './global-error.component.html',
  styleUrl: './global-error.component.css',
})
export class GlobalErrorComponent {
  private errSvc = inject(ErrorService);
  errors = this.errSvc.errors;

  close(msg: string) {
    this.errSvc.removeError(msg);
  }
}
