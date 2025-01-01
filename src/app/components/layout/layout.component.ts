import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { ContentAreaComponent } from "../content-area/content-area.component";
import { DataCommunicationService } from '../../services/data-communication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, LeftsideBarComponent, ContentAreaComponent , NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  toggleSideBar: boolean = true; //local variable
  dummy : any;
  dumm1:any =  null;

// class constructor 
  constructor(private dataCommunication: DataCommunicationService) {

    console.log(this.dummy,'dummy....')
    console.log(this.dumm1,'value nul....')
    // Getting data from service 
    this.dataCommunication.getSideBarStatus().subscribe( (res: any) =>{
      this.toggleSideBar = res; //assgining to local variable for using in html template
    

      // can check the Response data in console by console.log() 
    })
  }




}
