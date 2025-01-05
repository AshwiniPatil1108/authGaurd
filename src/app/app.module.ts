import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { UserFormComponent } from './shared/component/users/user-form/user-form.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProdutFormComponent } from './shared/component/products/produt-form/produt-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FairCardComponent } from './shared/component/fairs/fair-card/fair-card.component';
import { AdminDashboardComponent } from './shared/component/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FairsComponent,
    UsersComponent,
    ProductsComponent,
    PageNotFoundComponent,
    AuthComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProdutFormComponent,
    FairCardComponent,
    AdminDashboardComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
