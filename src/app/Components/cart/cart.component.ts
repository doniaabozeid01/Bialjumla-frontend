import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,         // Show the arrows
    navText: ['←', '→'], // Custom arrows (can be changed)
    items:6
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   740: {
    //     items: 3
    //   },
    //   940: {
    //     items: 5
    //   }
    // },
  }


  slidesStore = [
    { id: 1, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 6', description: 'Description for Card 6' },
    { id: 7, src: '../../../assets/3_ab581e23b9_6942e88a5c_ec147d4054.avif', title: 'Card 7', description: 'Description for Card 7' }
  ];

  selectedValue: number = 1;  // القيمة المختارة افتراضيًا
  
  numbers: number[] = Array.from({ length: 12 }, (_, index) => index + 1);
  // console.log("this.numbers.indexOf(this.selectedValue) : ", this.numbers.indexOf(this.selectedValue));
  
  // دالة لزيادة القيمة
  increment() {
    const currentIndex = this.numbers.indexOf(Number(this.selectedValue));
    // console.log("this.selectedValue : ", this.selectedValue);
    // console.log("this.numbers.indexOf(this.selectedValue) : ", this.numbers.indexOf(Number(this.selectedValue)));
    // console.log("currentIndex : ", currentIndex);

    
    if (currentIndex < this.numbers.length - 1) {
      this.selectedValue = this.numbers[currentIndex + 1];
    }
  }

  // دالة لتقليل القيمة
  decrement() {
    const currentIndex = this.numbers.indexOf(this.selectedValue);
    if (currentIndex > 0) {
      this.selectedValue = this.numbers[currentIndex - 1];
    }
  }
  addToCart():void{

  }
}
