import { Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  numbers: { key: number, value: number }[] = [
    { key: 6, value: 1111 },
    { key: 7, value: 1452 },
    { key: 8, value: 1200 },
    { key: 9, value: 1250 },
    { key: 10, value: 1280 },
    { key: 11, value: 1350 }
  ];

  selectedValue: number = this.numbers[0].key;  // القيمة الأولية المختارة
  isDropdownOpen: boolean = false;  // التحكم في ظهور الـ dropdown

  // دالة لفتح أو غلق الـ dropdown عند النقر على الـ header
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // دالة لاختيار القيمة عند النقر على عنصر داخل الـ dropdown
  selectValue(value: number) {
    this.selectedValue = value;
    this.isDropdownOpen = false; // غلق الـ dropdown بعد اختيار القيمة
  }

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,  // إخفاء الـ dots التقليدية
  //   navSpeed: 700,
  //   nav: false,  // إخفاء الأسهم
  //   items: 1
  // }
  

  slidesStore = [
    { id: 1, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, src: '../../../assets/4_1b844432e5.avif', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 6', description: 'Description for Card 6' },
    { id: 7, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 7', description: 'Description for Card 7' }
  ];

  @ViewChild(CarouselComponent) carousel!: CarouselComponent;  // استخدام CarouselComponent بدلاً من OwlCarouselComponent




  // حفظ الـ src للصورة المعروضة حاليًا
  currentImage: string = '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif'; 

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,  // إخفاء الـ dots التقليدية
    navSpeed: 700,
    nav: false,  // إخفاء الأسهم
    items: 1
  };

  // slidesStore = [
  //   { id: 1, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 1', description: 'Description for Card 1' },
  //   { id: 2, src: '../../../assets/4_1b844432e5.avif', title: 'Card 2', description: 'Description for Card 2' },
  //   { id: 3, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 3', description: 'Description for Card 3' },
  //   { id: 4, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 4', description: 'Description for Card 4' },
  //   { id: 5, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 5', description: 'Description for Card 5' },
  //   { id: 6, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 6', description: 'Description for Card 6' },
  //   { id: 7, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 7', description: 'Description for Card 7' }
  // ];

  // @ViewChild(CarouselComponent) carousel!: CarouselComponent;

  // دالة لتغيير الصورة المعروضة عند النقر على صورة صغيرة
  changeImage(src: string) {
    this.currentImage = src;
    // هنا يمكننا استخدام carousel.to() إذا أردنا التبديل مباشرة إلى الشريحة المرتبطة بالصورة
  }



  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    nav: false,
    navSpeed: 700,
    autoplay: false,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: false,
    // autoplayHoverPlay:true, 
    items: 1,
  };



  slidesStore2 = [
    { id: 1, src: '../../../assets/4_1b844432e5.avif', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, src: '../../../assets/Artboard_1_copy_2_ed6f135ac3.avif', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, src: '../../../assets/Artboard_1_copy_8_2230087055.png', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, src: '../../../assets/Artboard_1_copy_def74ea03e.avif', title: 'Card 5', description: 'Description for Card 5' },
  ];


  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,         // Show the arrows
    navText: ['←', '→'], // Custom arrows (can be changed)
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
  };

}
