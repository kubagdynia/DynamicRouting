import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigResolverService } from '@app/core/services/config-resolver.service';
import { FrontConfigModel } from '@app/shared/models/front-config.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  frontConfig: FrontConfigModel;

  private readonly configResolverService = inject(ConfigResolverService);

  ngOnInit(): void {
    this.configResolverService.getConfig().subscribe((config) => (this.frontConfig = config));
  }
}
