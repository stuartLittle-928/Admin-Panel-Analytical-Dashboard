import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent
{
  var3: boolean = false;

  showDropdown()
  {
    this.var3 = !this.var3;

    console.log(this.var3);
  }
}
