import { Routes } from '@angular/router';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { raceWith } from 'rxjs';
import { getLocaleDayPeriods } from '@angular/common';
import { FormsComponent } from './components/forms/forms.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { UIComponentsComponent } from './ui-components/ui-components.component';
import { RegisterPageComponent } from './register-page/register-page.component';


export const routes: Routes = [
    // {
    //     path:'',
    //     component: ContentAreaComponent
    // },
    {
        path: '',
        component: DashboardComponent
    }
    ,
    {
        path:'dashboard',
        component: DashboardComponent
    }
    ,
    {
        path:'forms',
        component: FormsComponent
    }
    ,
    {
        path:'buttons',
        component: ButtonsComponent
    }
    ,
    {
        path:'UIcomponents',
        component:UIComponentsComponent
    }
    ,
    {
        path:'RegisterPage',
        component:RegisterPageComponent
    }
];

