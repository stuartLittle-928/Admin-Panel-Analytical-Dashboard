import { Component } from '@angular/core';
import { LeftsideBarComponent } from "../leftside-bar/leftside-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LeftsideBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showSideBar: boolean = true;

  constructor(){

  }
  toggle(){
    this.showSideBar = !this.showSideBar;
    console.log(this.showSideBar, 'status...')
  }

}
