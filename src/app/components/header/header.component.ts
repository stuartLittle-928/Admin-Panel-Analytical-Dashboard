import { Component } from '@angular/core';
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";
import { ConditionHandlingService } from '../../services/data-communication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftsideBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isVisible:boolean=true;
  constructor( private conditionhandling:ConditionHandlingService){}
  Togglebtn(){
    this.isVisible=!this.isVisible;
    this.conditionhandling.setSideBarStatus(this.isVisible);
  }
}
