import { Component } from '@angular/core';
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { RouterLink } from '@angular/router';
import { DataCommunicationService } from '../../services/data-communication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftsideBarComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showSideBar: boolean = true;

  
  constructor(private dataCommunication: DataCommunicationService) {}

  // onclick function called 
  toggle(){
    this.showSideBar = !this.showSideBar;

    // setting sidebar data using service 
    this.dataCommunication.setSideBarStatus(this.showSideBar);
  }
}
