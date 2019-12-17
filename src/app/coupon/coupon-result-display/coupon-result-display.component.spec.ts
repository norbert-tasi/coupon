import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { CouponService } from '../coupon.service';
import { CouponResultDisplayComponent } from './coupon-result-display.component';

class MockService {
  latest = null;
}


describe('CouponResultDisplayComponent', () => {
  let component: CouponResultDisplayComponent;
  let fixture: ComponentFixture<CouponResultDisplayComponent>;
  let service: CouponService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponResultDisplayComponent],
      imports: [SharedModule],
      providers: [{ provide: CouponService, useClass: MockService }]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponResultDisplayComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CouponService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create placeholder if no coupon entered', () => {
    service.latest = null;
    fixture.detectChanges();
    const div = fixture.nativeElement.querySelector('div');
    expect(div.textContent).toEqual('Please enter your coupon first');
  });

  it('should display gratulations if coupon is valid', () => {
    fixture = TestBed.createComponent(CouponResultDisplayComponent);
    component = fixture.componentInstance;
    service.latest = { valid: true, activated: new Date(), msg: null };
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('h3');
    expect(div.textContent).toEqual('Congrats! You won!');
  });

  it('should display error pane if coupon is not valid', () => {
    fixture = TestBed.createComponent(CouponResultDisplayComponent);
    component = fixture.componentInstance;
    service.latest = { valid: false, activated: new Date(), msg: null };
    fixture.detectChanges();
    const div = fixture.nativeElement.querySelector('h3');
    expect(div.textContent).toEqual('Oops!');
  });

});
