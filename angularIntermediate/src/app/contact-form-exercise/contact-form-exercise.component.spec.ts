import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormExerciseComponent } from './contact-form-exercise.component';

describe('ContactFormExerciseComponent', () => {
  let component: ContactFormExerciseComponent;
  let fixture: ComponentFixture<ContactFormExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormExerciseComponent]
    });
    fixture = TestBed.createComponent(ContactFormExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
