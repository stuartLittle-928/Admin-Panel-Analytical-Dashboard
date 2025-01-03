import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TablesComponent } from './components/tables/tables.component';
import { LoginComponent } from './components/login/login.component';
import { UIComponentsComponent } from './ui-components/ui-components.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ModalsComponent } from './components/modals/modals.component';

export const routes: Routes = [
    
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
            path:'tables',
            component:TablesComponent
        },
        {
            path:'loginform',
            component:LoginComponent
        },
        {
            path:'UIComponent',
            component:UIComponentsComponent
        }
        ,
        {
            path:'register',
            component:RegisterPageComponent
        }
        ,
        {
            path:'modals',
            component:ModalsComponent
        }
]
