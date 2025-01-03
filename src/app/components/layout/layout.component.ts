import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { ContentAreaComponent } from "../content-area/content-area.component";
import { ConditionHandlingService } from '../../services/data-communication.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, LeftsideBarComponent, ContentAreaComponent , CommonModule],
  templateUrl:'./layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  sideBarStatus:boolean=true;

  constructor(private conditionhandling: ConditionHandlingService){

  this.conditionhandling.getSideBarStatus().subscribe((res:any) =>{
    this.sideBarStatus=res;
  })
}
}
