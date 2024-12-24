import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';

export const routes: Routes =
[
    { path: ""              , component: HomepageComponent } ,
    { path: "dashboard"     , component: HomepageComponent } ,
    { path: "forms"         , component: FormsComponent } ,
    { path: "buttons"       , component: ButtonsComponent } ,
    { path: "tables"        , component: TablesComponent } ,
    { path: "Ui-components" , component: UiComponentsComponent } ,
    // { path: "modals"     , component: homepage } ,
    // { path: "login"      , component: homepage } ,
    // { path: "register"   , component: homepage } ,
    // { path: "404-page"   , component: homepage } ,

];
