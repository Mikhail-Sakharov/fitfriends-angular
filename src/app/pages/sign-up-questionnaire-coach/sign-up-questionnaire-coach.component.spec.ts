import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpQuestionnaireCoachComponent } from './sign-up-questionnaire-coach.component';

describe('SignUpQuestionnaireCoachComponent', () => {
  let component: SignUpQuestionnaireCoachComponent;
  let fixture: ComponentFixture<SignUpQuestionnaireCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpQuestionnaireCoachComponent]
    });
    fixture = TestBed.createComponent(SignUpQuestionnaireCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
