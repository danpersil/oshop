import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/core/components/home/home.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { OrdersDetailComponent } from 'app/core/components/orders-detail/orders-detail.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    OrdersDetailComponent,
  ],
  exports: [
  ]
})
export class CoreModule { }
