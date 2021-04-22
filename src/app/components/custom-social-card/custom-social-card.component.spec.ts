import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSocialCardComponent } from './custom-social-card.component';

describe('CustomSocialCardComponent', () => {
  let component: CustomSocialCardComponent;
  let fixture: ComponentFixture<CustomSocialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSocialCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSocialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
