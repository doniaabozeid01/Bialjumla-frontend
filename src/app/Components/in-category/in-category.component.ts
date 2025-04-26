import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-in-category',
  templateUrl: './in-category.component.html',
  styleUrls: ['./in-category.component.scss']
})
export class InCategoryComponent {
  constructor(private router: Router) {

  }

  slidesStore = [
    { id: 1, src: '../../../assets/1.jpg', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, src: '../../../assets/2.jpg', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, src: '../../../assets/3.jpg', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, src: '../../../assets/4.jpg', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, src: '../../../assets/1.jpg', title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, src: '../../../assets/5.jpg', title: 'Card 6', description: 'Description for Card 6' },
    { id: 6, src: '../../../assets/5.jpg', title: 'Card 6', description: 'Description for Card 6' },
    { id: 6, src: '../../../assets/5.jpg', title: 'Card 6', description: 'Description for Card 6' },
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





  goToInSection(): void {
    this.router.navigate(['/in-category'])
  }









  isDropdownVisible: boolean = false;
  arrow: string = '&#9660;';  // السهم لأسفل بشكل افتراضي
  selectedOption: string = '';

  // تغيير حالة ظهور الـ Dropdown
  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;

    // تغيير السهم
    if (this.isDropdownVisible) {
      this.arrow = '&#9650;'; // السهم لأعلى
    } else {
      this.arrow = '&#9660;'; // السهم لأسفل
    }
  }

  // اختيار خيار من القائمة
  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownVisible = false;  // إخفاء الـ dropdown بعد اختيار الخيار
    console.log('Selected option:', this.selectedOption);
  }





  // تخزين الأقسام المفتوحة في مصفوفة
  activeSections: string[] = [];

  // دالة لتبديل حالة الفتح للقسم
  toggleSection(section: string) {
    const index = this.activeSections.indexOf(section);
    if (index === -1) {
      // إذا كان القسم غير مفتوح، افتحه
      this.activeSections.push(section);
    } else {
      // إذا كان القسم مفتوحًا، أغلقه
      this.activeSections.splice(index, 1);
    }
  }

  // دالة لفحص ما إذا كان القسم مفتوحًا
  isSectionActive(section: string): boolean {
    return this.activeSections.includes(section);
  }



  goToProductDetails(): void {
    this.router.navigate(['/product-details', 1])
  }


  clicked: boolean = false;
  deals(): void {
    this.clicked = !this.clicked;
  }

  sortClicked: boolean = false;
  sort(): void {
    this.sortClicked = true;
  }

  sortClosed():void{
    this.sortClicked = false;
  }




  filterClicked: boolean = false;
  filter(): void {
    this.filterClicked = true;
  }

  filterClosed():void{
    this.filterClicked = false;
  }




}
