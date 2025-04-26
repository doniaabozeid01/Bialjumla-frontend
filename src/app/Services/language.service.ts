import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject = new BehaviorSubject<string>('en');
  languageChanged$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.switchLanguage(savedLang);
  }

  switchLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.translate.use(language);

    if (language === 'ar') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }

    this.languageSubject.next(language); // اشعار باقي الكومبوننتات
  }

}
