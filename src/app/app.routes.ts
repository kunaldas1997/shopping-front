import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { StoreFrontComponent } from './store-front/store-front.component';
import { UserlogComponent } from './userlog/userlog.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
   {
      path: '', component: HomeComponent, pathMatch: 'full'
   },
   {
      path: 'store', component: StoreFrontComponent
   },
   {
      path: 'login', component: UserlogComponent
   },
   {
      path: 'signup', component: SignupComponent
   },
   {
      path: 'store', component: StoreFrontComponent
   }
];
