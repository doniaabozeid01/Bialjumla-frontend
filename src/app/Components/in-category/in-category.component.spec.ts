import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCategoryComponent } from './in-category.component';

describe('InCategoryComponent', () => {
  let component: InCategoryComponent;
  let fixture: ComponentFixture<InCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InCategoryComponent]
    });
    fixture = TestBed.createComponent(InCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
