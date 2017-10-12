import { StartPage } from '../pages/start/start';
import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';
import { Routes } from "@angular/router";


export const rootRouterConfig: Routes = [
    {
        path:"",
        redirectTo:"pagehome",
        pathMatch:'full'
    }, 
    {
        path:"pagelist",
        component:ListPage
    },
     {
         path:"start/:item",
         component: StartPage
     }
];