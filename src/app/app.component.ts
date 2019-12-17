import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coupon';
  displayCookiePolicy = true;

  constructor() {
    const cookies = localStorage.getItem('cookies');
    if (!cookies) {
      return;
    }
    this.displayCookiePolicy = false;
  }

  acceptCookies() {
    localStorage.setItem('cookies', 'true');
    this.displayCookiePolicy = false;
  }
}
