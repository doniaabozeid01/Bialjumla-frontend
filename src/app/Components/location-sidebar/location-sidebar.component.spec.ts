import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSidebarComponent } from './location-sidebar.component';

describe('LocationSidebarComponent', () => {
  let component: LocationSidebarComponent;
  let fixture: ComponentFixture<LocationSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationSidebarComponent]
    });
    fixture = TestBed.createComponent(LocationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
