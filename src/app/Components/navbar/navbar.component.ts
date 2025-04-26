
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/Services/language.service';
import { VisibilityService } from 'src/app/Services/visibility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  enter: boolean = false;
  hide: boolean = false;
  showCategories:boolean = false;
  constructor(private router: Router, private visibilityService: VisibilityService, private languageService: LanguageService) { }
  isVisible: boolean = true;


  selectedLanguage: string = 'en';
  // language: string = 'en';
  ngOnInit() {
    this.visibilityService.getVisibility().subscribe(visible => {
      this.isVisible = visible;
    });

    this.selectedLanguage = localStorage.getItem('lang') || 'en';


    // this.language = localStorage.getItem('lang') || 'en';
    this.languageService.languageChanged$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }

  expandedCategories: { [key: string]: boolean } = {};

  // تفعيل أو إخفاء الفئة
  toggleCategory(categoryId: number) {
    this.expandedCategories[categoryId] = !this.expandedCategories[categoryId];
  }

  // تفعيل أو إخفاء الفئة الفرعية
  toggleSubCategory(categoryId: number, subCategoryId: number) {
    const key = `${categoryId}-${subCategoryId}`;  // حساب الـ key هنا
    this.expandedCategories[key] = !this.expandedCategories[key];
  }

  // إرجاع الكلاس المناسب للـ Category
  getCategoryIconClass(categoryId: number): string {
    return this.expandedCategories[categoryId] ? 'fa-minus' : 'fa-plus';
  }

  // إرجاع الكلاس المناسب للـ SubCategory
  getSubCategoryIconClass(categoryId: number, subCategoryId: number): string {
    const key = `${categoryId}-${subCategoryId}`;  // حساب الـ key هنا
    return this.expandedCategories[key] ? 'fa-minus' : 'fa-plus';
  }

  // الحصول على الـ key لفئة فرعية
  getSubCategoryKey(categoryId: number, subCategoryId: number): string {
    return `${categoryId}-${subCategoryId}`;
  }

  categories: any = [
    {
      id: 1,
      name: "Food Cupboard",
      subCategories: [
        {
          id: 1,
          name: "Canned Goods",
          subSubCategories: [
            { id: 1, name: "Beans" },
            { id: 2, name: "Tomatoes" },
            { id: 3, name: "Tuna" },
            { id: 4, name: "Corn" }
          ]
        },
        {
          id: 2,
          name: "Spices",
          subSubCategories: [
            { id: 1, name: "Cumin" },
            { id: 2, name: "Coriander" },
            { id: 3, name: "Turmeric" },
            { id: 4, name: "Paprika" }
          ]
        },
        {
          id: 3,
          name: "Pasta & Noodles",
          subSubCategories: [
            { id: 1, name: "Spaghetti" },
            { id: 2, name: "Macaroni" },
            { id: 3, name: "Penne" },
            { id: 4, name: "Ramen" }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Fresh Food",
      subCategories: [
        {
          id: 1,
          name: "Meats",
          subSubCategories: [
            { id: 1, name: "Chicken" },
            { id: 2, name: "Beef" },
            { id: 3, name: "Lamb" },
            { id: 4, name: "Pork" }
          ]
        },
        {
          id: 2,
          name: "Vegetables",
          subSubCategories: [
            { id: 1, name: "Carrot" },
            { id: 2, name: "Potato" },
            { id: 3, name: "Spinach" },
            { id: 4, name: "Broccoli" }
          ]
        },
        {
          id: 3,
          name: "Fish & Seafood",
          subSubCategories: [
            { id: 1, name: "Salmon" },
            { id: 2, name: "Tuna" },
            { id: 3, name: "Shrimp" },
            { id: 4, name: "Squid" }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Fruits & Vegetables",
      subCategories: [
        {
          id: 1,
          name: "Fruits",
          subSubCategories: [
            { id: 1, name: "Apple" },
            { id: 2, name: "Banana" },
            { id: 3, name: "Mango" },
            { id: 4, name: "Pineapple" }
          ]
        },
        {
          id: 2,
          name: "Vegetables",
          subSubCategories: [
            { id: 1, name: "Cucumber" },
            { id: 2, name: "Tomato" },
            { id: 3, name: "Lettuce" },
            { id: 4, name: "Bell Pepper" }
          ]
        },
        {
          id: 3,
          name: "Herbs",
          subSubCategories: [
            { id: 1, name: "Basil" },
            { id: 2, name: "Mint" },
            { id: 3, name: "Coriander" },
            { id: 4, name: "Parsley" }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Beverages",
      subCategories: [
        {
          id: 1,
          name: "Juices",
          subSubCategories: [
            { id: 1, name: "Orange Juice" },
            { id: 2, name: "Apple Juice" },
            { id: 3, name: "Grape Juice" }
          ]
        },
        {
          id: 2,
          name: "Soft Drinks",
          subSubCategories: [
            { id: 1, name: "Coca-Cola" },
            { id: 2, name: "Pepsi" },
            { id: 3, name: "Fanta" },
            { id: 4, name: "Sprite" }
          ]
        },
        {
          id: 3,
          name: "Water",
          subSubCategories: [
            { id: 1, name: "Mineral Water" },
            { id: 2, name: "Sparkling Water" },
            { id: 3, name: "Spring Water" }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Electronics & Appliances",
      subCategories: [
        {
          id: 1,
          name: "Home Appliances",
          subSubCategories: [
            { id: 1, name: "Washing Machines" },
            { id: 2, name: "Refrigerators" },
            { id: 3, name: "Microwaves" }
          ]
        },
        {
          id: 2,
          name: "TVs & Entertainment",
          subSubCategories: [
            { id: 1, name: "Smart TVs" },
            { id: 2, name: "Speakers" },
            { id: 3, name: "Soundbars" }
          ]
        },
        {
          id: 3,
          name: "Computers & Laptops",
          subSubCategories: [
            { id: 1, name: "Laptops" },
            { id: 2, name: "Desktops" },
            { id: 3, name: "Monitors" }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Smartphones, Tablets & Wearables",
      subCategories: [
        {
          id: 1,
          name: "Smartphones",
          subSubCategories: [
            { id: 1, name: "iPhone" },
            { id: 2, name: "Samsung Galaxy" },
            { id: 3, name: "Huawei" },
            { id: 4, name: "OnePlus" }
          ]
        },
        {
          id: 2,
          name: "Tablets",
          subSubCategories: [
            { id: 1, name: "iPad" },
            { id: 2, name: "Samsung Tab" },
            { id: 3, name: "Microsoft Surface" }
          ]
        },
        {
          id: 3,
          name: "Wearables",
          subSubCategories: [
            { id: 1, name: "Apple Watch" },
            { id: 2, name: "Fitbit" },
            { id: 3, name: "Garmin" }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Baby Products",
      subCategories: [
        {
          id: 1,
          name: "Baby Food",
          subSubCategories: [
            { id: 1, name: "Formula Milk" },
            { id: 2, name: "Baby Snacks" },
            { id: 3, name: "Organic Baby Food" }
          ]
        },
        {
          id: 2,
          name: "Diapers & Wipes",
          subSubCategories: [
            { id: 1, name: "Huggies" },
            { id: 2, name: "Pampers" },
            { id: 3, name: "Luvs" }
          ]
        },
        {
          id: 3,
          name: "Toys & Games",
          subSubCategories: [
            { id: 1, name: "Building Blocks" },
            { id: 2, name: "Stuffed Toys" },
            { id: 3, name: "Educational Toys" }
          ]
        }
      ]
    }
  ];
  






  onMouseLeave(event: MouseEvent) {
    console.log(event);

    // تحقق إذا كانت الماوس خرجت من العنصر بأكمله، وأيضًا إذا كانت الماوس فوق العنصر الثاني
    const hoverBox = document.querySelector('.hover-box');
    if (!hoverBox || !hoverBox.contains(event.relatedTarget as Node)) {
      this.enter = false; // إخفاء المستطيل عندما الماوس خارج العنصر تمامًا
    }
  }


  goToDetails(nameCat: string): void {
    this.router.navigate(['details'])
  }


  show() {
    console.log("HI!!!!!!!!!!!!!!!!!!!!!!");
    // this.router.navigate(['/location'])
    this.visibilityService.show();  // استدعاء دالة show من الـ service
  }


  showLoc() {
    console.log("HI!!!!!!!!!!!!!!!!!!!!!!");
    // this.router.navigate(['/location'])
    this.visibilityService.showLocalisation();  // استدعاء دالة show من الـ service
  }
  // changeLanguge(){
  //   if(this.lang == "en"){
  //     thi
  //   }
  // }



  switchLanguageOverAll() {
    if (this.selectedLanguage == 'en') {
      this.selectedLanguage = 'ar';
    }
    else if (this.selectedLanguage == 'ar') {
      this.selectedLanguage = 'en';
    }
    this.languageService.switchLanguage(this.selectedLanguage); // تغيير اللغة باستخدام الخدمة
    localStorage.setItem('lang', this.selectedLanguage);
  }


  lang: string = '';
  GetLanguage(): string {
    if (this.selectedLanguage == 'en') {
      this.lang = 'العربيه';
    }
    else if (this.selectedLanguage == 'ar') {
      this.lang = 'English';
    }
    return this.lang
  }


  hideSidebar() {
    document.body.style.overflow = '';
    console.log("hide");
    this.hide = false;
  }

  showSidebar() {
    document.body.style.overflow = 'hidden';
    console.log("show");
    this.hide = true;
  }


  showCategoriesSide(){
    this.showCategories = true;
  }


  hideCategoriesSide(){
    this.showCategories = false;
  }
}
