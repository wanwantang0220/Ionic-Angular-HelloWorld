import { Router2Page } from '../pages/router/router2';
import { RouterPage } from '../pages/router/router';
import { StartPage } from '../pages/start/start';
import { ListPage } from '../pages/list/list';
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
     },
     {
         path:"router",
         component:RouterPage
     },
     {
         path:"router2",
         component:Router2Page
     }
];