import { ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from './Services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bialjumla';

  constructor(private languageService: LanguageService, private cdRef: ChangeDetectorRef
   ) {}

  // دالة لاستدعاء دالة تغيير اللغة من الخدمة
  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
    this.cdRef.detectChanges();
  }


}
