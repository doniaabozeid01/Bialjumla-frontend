import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { CartComponent } from './Components/cart/cart.component';
import { DetailsComponent } from './Components/details/details.component';
import { InCategoryComponent } from './Components/in-category/in-category.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LocationSidebarComponent } from './Components/location-sidebar/location-sidebar.component';

const routes: Routes = [

    // Layout للمحتوى العام (home, etc)
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // المسار الفارغ سيعيد توجيه المستخدم إلى home
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'in-category', component: InCategoryComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'location', component: LocationSidebarComponent },
      // أي مسارات أخرى تحتاج إلى الـ Navbar
    ]
  },


  // Layout خاص بالـ Authentication (login, register)
  {
    path: '', component: AuthLayoutComponent, children: [
      // { path: '', redirectTo: '/login', pathMatch: 'full' }, // المسار الفارغ سيعيد توجيه المستخدم إلى login
      { path: 'login', component: LoginComponent },
      { path: 'register', component: SignupComponent }
    ]
  },


  // إعادة توجيه لأي مسار غير موجود
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
