import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'; // استيراد مكتبة Leaflet
import 'leaflet-control-geocoder'; // استيراد مكتبة Geocoder (إن أردت استخدامها)
import { LanguageService } from 'src/app/Services/language.service';
import { VisibilityService } from 'src/app/Services/visibility.service';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.scss']
})
export class LocalisationComponent {



  constructor(private visibilityService: VisibilityService, private languageService: LanguageService) { }

  selectedLanguage: string = 'en';  // اللغة الافتراضية
  langForDirection: string ='en';
  ngOnInit(): void {
    
    this.selectedLanguage = localStorage.getItem('lang') || 'en';
    this.langForDirection = this.selectedLanguage;

    this.visibilityService.getVisibility().subscribe(visible => {
      this.isVisible = visible;
    });

  }









  // متغير لتحديد حالة إظهار أو إخفاء الـ component
  isVisible: boolean = true;

  // الدالة التي تقوم بإخفاء الـ component
  hide() {
    console.log("hiii");

    this.visibilityService.hideLocalisation();  // استدعاء دالة hide من الـ service

    console.log("hiiiiiiiiiiiiiiiiiiii");

  }




  // دالة لتبديل اللغة بناءً على اختيار المستخدم
  switchLanguageOverAll() {
    this.languageService.switchLanguage(this.selectedLanguage); // تغيير اللغة باستخدام الخدمة
    localStorage.setItem('lang', this.selectedLanguage);
    this.visibilityService.hideLocalisation();  // استدعاء دالة hide من الـ service
  }



  switchLanguage(language: string) {
    this.selectedLanguage = language;
  }




  cancelChangeLanguage() {
    this.visibilityService.hideLocalisation();  // استدعاء دالة hide من الـ service
  }




  selectedCountry: boolean = false;
  changeSelectedCountry(event: MouseEvent) {
    event.stopPropagation(); // منع انتشار حدث click ليحدث مرتين

    console.log("hiiiiiiiiiiiiiiii");

    this.selectedCountry = !this.selectedCountry;
    console.log(this.selectedCountry);

  }

}
