import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private readonly _errors = signal<string[]>([]);

  errors = this._errors; // udostępniasz do odczytu

  addError(msg: string) {
    this._errors.update((list) => [...list, msg]);
    // Automatyczne usuwanie po 7 sekundach:
    setTimeout(() => this.removeError(msg), 7000);
  }

  removeError(msg: string) {
    this._errors.update((list) => list.filter((e) => e !== msg));
  }

  clear() {
    this._errors.set([]);
  }
}
