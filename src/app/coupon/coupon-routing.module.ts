import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponCheckerComponent } from './coupon-checker/coupon-checker.component';
import { CouponResultDisplayComponent } from './coupon-result-display/coupon-result-display.component';


const routes: Routes = [
  { path: '', component: CouponCheckerComponent },
  { path: 'result', component: CouponResultDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
