import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpQuestionnaireUserComponent } from './sign-up-questionnaire-user.component';

describe('SignUpQuestionnaireUserComponent', () => {
  let component: SignUpQuestionnaireUserComponent;
  let fixture: ComponentFixture<SignUpQuestionnaireUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpQuestionnaireUserComponent]
    });
    fixture = TestBed.createComponent(SignUpQuestionnaireUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
