import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { CouponCheckerComponent } from './coupon-checker.component';


describe('CouponCheckerComponent', () => {
  let component: CouponCheckerComponent;
  let fixture: ComponentFixture<CouponCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CouponCheckerComponent],
      imports: [ReactiveFormsModule, SharedModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
