import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceJobComponent } from './experience-job.component';

describe('ExperienceJobComponent', () => {
  let component: ExperienceJobComponent;
  let fixture: ComponentFixture<ExperienceJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
