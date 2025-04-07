import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isHomePage: boolean = false;
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit() {
    // الاشتراك في تغييرات الـ route
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfHomePage();
      }
    });
  }

  checkIfHomePage() {
    // تحقق من أن الصفحة الحالية هي "home"
    if (this.router.url === '/home') {
      this.isHomePage = true;  // إذا كانت الصفحة هي الصفحة الرئيسية
    } else {
      this.isHomePage = false;  // إذا كانت صفحة أخرى
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy() {
    // لا تنسى إلغاء الاشتراك عندما يتم تدمير الـ component
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
