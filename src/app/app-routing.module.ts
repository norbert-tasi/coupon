import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponModule } from './coupon/coupon.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CouponModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
