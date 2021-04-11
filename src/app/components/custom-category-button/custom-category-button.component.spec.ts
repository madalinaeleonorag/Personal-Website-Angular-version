import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCategoryButtonComponent } from './custom-category-button.component';

describe('CustomCategoryButtonComponent', () => {
  let component: CustomCategoryButtonComponent;
  let fixture: ComponentFixture<CustomCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCategoryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
