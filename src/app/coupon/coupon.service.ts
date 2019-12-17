import { Injectable } from '@angular/core';
import { HttpService } from '@shared/http.service';
import { Coupon, LatestCoupon } from './interfaces/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  coupon: Coupon;
  latest: LatestCoupon;

  constructor(private service: HttpService) {
    const saveContent = localStorage.getItem('coupon');
    if (!saveContent) {
      return;
    }
    const data = JSON.parse(saveContent);
    this.coupon = data.coupon;
    this.latest = data.latest;
  }

  async checkCoupon(code: string) {
    let msg: string;
    let valid = false;
    let activated: Date;
    if (this.coupon && this.coupon.code === code) {
      msg = 'It looks like the coupon was used';
      activated = this.coupon.activated;
    } else {
      const response: { valid: boolean } = await this.service.post('coupon', { code });
      valid = response.valid;
      if (response.valid) {
        this.coupon = { code, activated: new Date() };
        activated = this.coupon.activated;
      } else {
        msg = 'Invalid coupon';
      }
    }
    this.latest = { valid, msg, activated };
    localStorage.setItem('coupon', JSON.stringify({ coupon: this.coupon, latest: this.latest }));
  }
}
