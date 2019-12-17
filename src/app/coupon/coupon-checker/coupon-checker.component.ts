import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as UIkit from 'uikit';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-checker',
  templateUrl: './coupon-checker.component.html',
  styleUrls: ['./coupon-checker.component.scss']
})
export class CouponCheckerComponent implements OnInit {
  form: FormGroup;
  busy: boolean;

  constructor(private fb: FormBuilder, private service: CouponService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      code: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  async doCheck() {
    try {
      this.busy = true;
      await this.service.checkCoupon(this.form.value.code);
      this.router.navigate(['result'], { relativeTo: this.route });
    } catch (e) {
      this.busy = false;
      UIkit.notification({
        message: 'Service is not available!',
        status: 'danger',
        pos: 'top-center',
        timeout: 5000
      });
    }
  }
}
