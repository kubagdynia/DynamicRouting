import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css',
})
export class ImportComponent {
  private route = inject(ActivatedRoute);

  code$ = this.route.data.pipe(map((d) => d['code']));
  label$ = this.route.data.pipe(map((d) => d['label']));
  synchronizationEnabled$ = this.route.data.pipe(map((d) => d['synchronizationEnabled']));
}
