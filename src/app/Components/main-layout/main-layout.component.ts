import { Component } from '@angular/core';
import { VisibilityService } from 'src/app/Services/visibility.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  isSidebarVisible: boolean = false;  // تعيين الافتراضي إلى false لعدم ظهور الـ sidebar عند التحميل
  isLocalisationVisible: boolean = false;  // تعيين الافتراضي إلى false لعدم ظهور الـ sidebar عند التحميل

  constructor(private visibilityService: VisibilityService) {}

  ngOnInit() {
    // الاشتراك في الخدمة لتحديث حالة الـ sidebar عند التغيير
    this.visibilityService.getVisibility().subscribe(visible => {
      this.isSidebarVisible = visible;  // تحديث حالة الظهور
    });


    this.visibilityService.getLocalisationVisibility().subscribe(visible => {
      this.isLocalisationVisible = visible;  // تحديث حالة الظهور
    });
  }
}
