import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { ContentAreaComponent } from "../content-area/content-area.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, LeftsideBarComponent, ContentAreaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
