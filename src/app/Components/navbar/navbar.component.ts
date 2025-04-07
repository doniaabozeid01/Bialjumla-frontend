
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  enter: boolean = false;

  constructor(private router: Router){}

  ngOnInit(){

  }


  onMouseLeave(event: MouseEvent) {
    console.log(event);
    
    // تحقق إذا كانت الماوس خرجت من العنصر بأكمله، وأيضًا إذا كانت الماوس فوق العنصر الثاني
    const hoverBox = document.querySelector('.hover-box');
    if (!hoverBox || !hoverBox.contains(event.relatedTarget as Node)) {
      this.enter = false; // إخفاء المستطيل عندما الماوس خارج العنصر تمامًا
    }
  }


  goToDetails(nameCat:string):void {
    this.router.navigate(['details'])
  }

}
