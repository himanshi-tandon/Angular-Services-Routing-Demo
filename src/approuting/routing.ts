import { Routes} from '@angular/router';
import { MenuComponent } from '../app/menu/menu.component';
import { DishDetailsComponent } from '../app/dish-details/dish-details.component';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { ContactComponent } from '../app/contact/contact.component';

export const routes: Routes = [


     {path: 'home', component: HomeComponent},
     {path:'menu', component: MenuComponent},
     {path:'about', component: AboutComponent},
     {path:'', redirectTo:'/home',pathMatch:'full'},
     { path: 'contactus',     component: ContactComponent },
     { path: 'dishdetail/:id',     component: DishDetailsComponent},
];


