import {Component, OnInit} from '@angular/core';
import {TrainingType} from 'src/app/app.constant';
import {CoachQuestionnaireStateService} from 'src/app/services/coach-questionnaire-state/coach-questionnaire-state.service';
import {SignUpStateService} from 'src/app/services/sign-up-state.service';

@Component({
  selector: 'app-sign-up-questionnaire-coach',
  templateUrl: './sign-up-questionnaire-coach.component.html',
  styleUrls: ['./sign-up-questionnaire-coach.component.css']
})
export class SignUpQuestionnaireCoachComponent implements OnInit {
  public trainingTypes = Object.values(TrainingType);
  public selectedTrainigTypes: TrainingType[] = [];

  constructor(
    private signUpStateService: SignUpStateService,
    private coachQuestionnaireStateService: CoachQuestionnaireStateService
  ) {}

  public ngOnInit(): void {
    this.selectedTrainigTypes = this.coachQuestionnaireStateService.selectedTrainigTypes;
  }

  public handleTrainingTypeInputChange(trainingType: TrainingType) {
    if (this.selectedTrainigTypes.includes(trainingType)) {
      this.selectedTrainigTypes = this.selectedTrainigTypes.filter((type) => type !== trainingType);
      this.coachQuestionnaireStateService.selectedTrainigTypes = this.coachQuestionnaireStateService.selectedTrainigTypes.filter((type) => type !== trainingType);
    } else {
      this.selectedTrainigTypes = [...this.selectedTrainigTypes, trainingType];
      this.coachQuestionnaireStateService.selectedTrainigTypes = [...this.coachQuestionnaireStateService.selectedTrainigTypes, trainingType];
    }
  }

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

    console.log(this.selectedTrainigTypes);
  }
}
