import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { RightsideBarComponent } from "../rightside-bar/rightside-bar.component";
import { ContentAreaComponent } from "../content-area/content-area.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DataCommunicationService } from '../../services/data-communication.service';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, LeftsideBarComponent, RightsideBarComponent, ContentAreaComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  azan: any = 213 + 123;
  currentRoute: String = "";
  constructor(private router: Router ,private datacommunication: DataCommunicationService) {

    this.datacommunication.getCurrentRoute().subscribe( (res: any) =>{

      this.currentRoute = res;
    })
  }
  ngOnInit() 
  { 

  }


  makeMeTwice() {
    this.azan = this.azan * 2;
  }
}
