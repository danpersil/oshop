import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { AdminModule } from 'app/admin/admin.module';
import { BsNavbarComponent } from 'app/core/components/bs-navbar/bs-navbar.component';
import { CoreModule } from 'app/core/core.module';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { OrdersDetailComponent } from './core/components/orders-detail/orders-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'orders-detail', component: OrdersDetailComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
