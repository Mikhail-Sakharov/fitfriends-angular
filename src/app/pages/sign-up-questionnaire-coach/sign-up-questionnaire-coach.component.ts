import {Component} from '@angular/core';
import {SignUpStateService} from 'src/app/services/sign-up-state.service';

@Component({
  selector: 'app-sign-up-questionnaire-coach',
  templateUrl: './sign-up-questionnaire-coach.component.html',
  styleUrls: ['./sign-up-questionnaire-coach.component.css']
})
export class SignUpQuestionnaireCoachComponent {
  constructor(
    private signUpStateService: SignUpStateService
  ) {}

  public handleSubmitButtonClick(evt: Event) {
    evt.preventDefault();
    console.log(this.signUpStateService.avatarFile);
    console.log(this.signUpStateService.userName);
    console.log(this.signUpStateService.email);
    console.log(this.signUpStateService.birthDate);
    console.log(this.signUpStateService.location);
    console.log(this.signUpStateService.password);
    console.log(this.signUpStateService.gender);
    console.log(this.signUpStateService.userRole);
  }
}
