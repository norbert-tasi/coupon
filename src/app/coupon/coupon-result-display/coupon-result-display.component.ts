import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupon-result-display',
  templateUrl: './coupon-result-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./coupon-result-display.component.scss']
})
export class CouponResultDisplayComponent implements OnInit {

  constructor(public service: CouponService) { }

  ngOnInit() {
  }

}
