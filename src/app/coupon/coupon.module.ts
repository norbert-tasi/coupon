import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CouponCheckerComponent } from './coupon-checker/coupon-checker.component';
import { CouponRoutingModule } from './coupon-routing.module';
import { CouponResultDisplayComponent } from './coupon-result-display/coupon-result-display.component';


@NgModule({
  declarations: [CouponCheckerComponent, CouponResultDisplayComponent],
  imports: [
    SharedModule,
    CouponRoutingModule
  ]
})
export class CouponModule { }
