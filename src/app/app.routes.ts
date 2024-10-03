import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { StoreFrontComponent } from './store-front/store-front.component';
import { UserlogComponent } from './userlog/userlog.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './store-front/cart/cart.component';
import { StoreMainSectionComponent } from './store-front/store-main-section/store-main-section.component';
import { ProductSingleComponent } from './store-front/store-main-section/product-single/product-single.component';
import { MyAccountComponent } from './store-front/my-account/my-account.component';

export const routes: Routes = [
   {
      path: '', component: HomeComponent, pathMatch: 'full'
   },
   {
      path: 'store', component: StoreFrontComponent,
      children: [
         {
            path: '', component: StoreMainSectionComponent
         },
         {
            path: 'cart', component: CartComponent
         },
         {
            path: 'product/:id', component: ProductSingleComponent
         },
         {
            path: 'my-account', component: MyAccountComponent
         }
      ]
   },
   {
      path: 'login', component: UserlogComponent
   },
   {
      path: 'signup', component: SignupComponent
   }
];
