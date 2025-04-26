import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);

  getVisibility() {
    return this.isVisibleSubject.asObservable();
  }

  hide() {
    this.isVisibleSubject.next(false);
  }

  show() {
    this.isVisibleSubject.next(true);
  }






  private isLocalisationVisibleSubject = new BehaviorSubject<boolean>(false);

  getLocalisationVisibility() {
    return this.isLocalisationVisibleSubject.asObservable();
  }

  hideLocalisation() {
    this.isLocalisationVisibleSubject.next(false);
  }

  showLocalisation() {
    this.isLocalisationVisibleSubject.next(true);
  }
}
