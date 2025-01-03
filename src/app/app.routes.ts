import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { ModalsComponent } from './modals/modals.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes =
[{
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: HomepageComponent } ,
        { path: "dashboard"     , component: HomepageComponent } ,
        { path: "forms"         , component: FormsComponent } ,
        { path: "buttons"       , component: ButtonsComponent } ,
        { path: "tables"        , component: TablesComponent } ,
        { path: "Ui-components" , component: UiComponentsComponent } ,
        { path: "modals"     , component: ModalsComponent } ,
    ],
},
    { path: "login-page"      , component: LoginComponent } ,
    { path: "signup-page"   , component: SignupComponent } ,
    { path: 'error-404', component: ErrorPageComponent }
]; 