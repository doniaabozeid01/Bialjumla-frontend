import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,         // Show the arrows
    navText: ['←', '→'], // Custom arrows (can be changed)
    rtl: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }




  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,         // Show the arrows
    navText: ['←', '→'], // Custom arrows (can be changed)
    rtl: true,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
  };




  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 700,
    autoplay: false,
    rtl: true,

    // autoplayTimeout: 3000,
    // autoplayHoverPause: false,
    // autoplayHoverPlay:true, 
    items: 1,
  };

  // changeOptions() {
  //   this.customOptions3 = {
  //     ...this.customOptions3, autoplay: true,
  //   } // this will make the carousel refresh
  // }
  // changeOptions2() {
  //   this.customOptions3 = {
  //     ...this.customOptions3, autoplay: false,
  //   } // this will make the carousel refresh
  // }

  copied = false; // لتحديد إذا كان النص قد تم نسخه

  copyText() {
    const code = 'HELLO15'; // الكود الذي سيتم نسخه

    // إنشاء عنصر textarea مؤقت
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);

    // تحديد النص
    textArea.select();
    textArea.setSelectionRange(0, 99999); // لتحديد النص على الموبايل

    // نسخ النص
    document.execCommand('copy');

    // إزالة عنصر الـ textarea المؤقت
    document.body.removeChild(textArea);

    // تغيير حالة النسخ إلى تم النسخ
    this.copied = true;

    // إعادة تعيين حالة النسخ بعد 2 ثانية
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }








  ////////////////////////////////////////////////////////////////
  slidesStore = [
    { id: 1, src: '../../../assets/1.jpg', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, src: '../../../assets/2.jpg', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, src: '../../../assets/3.jpg', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, src: '../../../assets/4.jpg', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, src: '../../../assets/1.jpg', title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, src: '../../../assets/5.jpg', title: 'Card 6', description: 'Description for Card 6' },
    { id: 7, src: '../../../assets/6.jpg', title: 'Card 7', description: 'Description for Card 7' }
  ];




  slidesStore2 = [
    { id: 1, src: '../../../assets/4_1b844432e5.avif', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, src: '../../../assets/Artboard_1_copy_2_ed6f135ac3.avif', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, src: '../../../assets/Artboard_1_copy_8_2230087055.png', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, src: '../../../assets/Artboard_1_copy_def74ea03e.avif', title: 'Card 5', description: 'Description for Card 5' },
  ];













  ////////////////////////////////////////////////////////////////////




  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
