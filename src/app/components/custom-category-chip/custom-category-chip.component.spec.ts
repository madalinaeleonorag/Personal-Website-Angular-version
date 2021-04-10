import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCategoryChipComponent } from './custom-category-chip.component';

describe('CustomCategoryChipComponent', () => {
  let component: CustomCategoryChipComponent;
  let fixture: ComponentFixture<CustomCategoryChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCategoryChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCategoryChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
