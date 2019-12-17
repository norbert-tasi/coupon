import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpService } from '@shared/http.service';
import { CouponService } from './coupon.service';

let service: CouponService;
let mockService;
describe('CouponService', () => {
  beforeEach(() => {
    mockService = jasmine.createSpyObj('HttpService', ['post']);
    TestBed.configureTestingModule({
      providers: [
        CouponService,
        { provide: HttpService, useValue: mockService }
      ],
      imports: [HttpClientModule]
    });
    service = TestBed.get(CouponService);
  });

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save coupon code', fakeAsync(() => {
    mockService.post.and.returnValue({ valid: true });
    service.checkCoupon('telekom');
    tick();
    const savedData = JSON.parse(localStorage.getItem('coupon'));
    expect(savedData.coupon.code).toEqual('telekom');
    expect(savedData.latest.valid).toBeTruthy();
  })
  );

  it('should not save coupon code', fakeAsync(() => {
    mockService.post.and.returnValue({ valid: false });
    service.checkCoupon('telekom');
    tick();
    const savedData = JSON.parse(localStorage.getItem('coupon'));
    expect(savedData.coupon).toBeUndefined();
    expect(savedData.latest.valid).toBeFalsy();
  })
  );

  it('should save latest code even if it is invalid', fakeAsync(() => {
    mockService.post.and.returnValue({ valid: false });
    service.checkCoupon('telekom');
    tick();
    const savedData = JSON.parse(localStorage.getItem('coupon'));
    expect(savedData.latest).toBeDefined();
    expect(savedData.latest.valid).toBeFalsy();
  }));

  it('should be invalid in case of already used coupon code', fakeAsync(() => {
    mockService.post.and.returnValue({ valid: true });
    service.checkCoupon('telekom');
    tick();
    service.checkCoupon('telekom');
    tick();
    const savedData = JSON.parse(localStorage.getItem('coupon'));
    expect(savedData.latest.valid).toBeFalsy();
  }));

});
