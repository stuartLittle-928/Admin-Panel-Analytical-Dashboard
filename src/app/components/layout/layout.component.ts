import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { RightsideBarComponent } from "../rightside-bar/rightside-bar.component";
import { ContentAreaComponent } from "../content-area/content-area.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet, LeftsideBarComponent, RightsideBarComponent, ContentAreaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {




}
