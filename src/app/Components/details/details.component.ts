import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {


  constructor(private router :Router){

  }

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





  goToInSection():void{
    this.router.navigate(['/in-category'])
  }
}
