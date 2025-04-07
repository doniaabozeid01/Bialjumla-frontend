import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { AuthLayoutComponent } from './Components/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './Components/footer/footer.component';
import { CartComponent } from './Components/cart/cart.component';
import { DetailsComponent } from './Components/details/details.component';
import { InCategoryComponent } from './Components/in-category/in-category.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LocationSidebarComponent } from './Components/location-sidebar/location-sidebar.component';
import * as L from 'leaflet'; // ده بيخليك تستخدمي Leaflet في المشروع
import 'leaflet-control-geocoder'; // استيراد مكتبة geocoder

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    CartComponent,
    DetailsComponent,
    InCategoryComponent,
    ProductDetailsComponent,
    LocationSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

