import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-content-area',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './content-area.component.html',
  styleUrl: './content-area.component.css'
})
export class ContentAreaComponent {

}
