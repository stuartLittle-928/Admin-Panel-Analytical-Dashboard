import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HomepageComponent } from "../homepage/homepage.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsComponent } from '../forms/forms.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TablesComponent } from '../tables/tables.component';
import { UiComponentsComponent } from '../ui-components/ui-components.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, HomepageComponent, FormsComponent, ButtonsComponent, TablesComponent, UiComponentsComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent
{
  var1 : boolean = false;
  var2: boolean = true;

  clickFunc()
  {
    this.sidenavToggle();
    this.sidenavOpen();
  }

  sidenavToggle()
  {
    this.var1 = !this.var1;
    console.log(this.var1);
  }

  sidenavOpen()
  {
    this.var2 = !this.var2;
    console.log(this.var2);
  }

}
