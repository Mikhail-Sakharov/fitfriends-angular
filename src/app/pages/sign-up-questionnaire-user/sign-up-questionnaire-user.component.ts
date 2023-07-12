import {Component} from '@angular/core';
import {Duration, TrainingLevel, TrainingType} from 'src/app/app.constant';
import {UserQuestionnaireStateService} from 'src/app/services/user-questionnaire-state/user-questionnaire-state.service';

@Component({
  selector: 'app-sign-up-questionnaire-user',
  templateUrl: './sign-up-questionnaire-user.component.html',
  styleUrls: ['./sign-up-questionnaire-user.component.css']
})
export class SignUpQuestionnaireUserComponent {
  public trainingTypes = Object.values(TrainingType);
  public selectedTrainigTypes: TrainingType[] = [];

  public durationOptions = Object.values(Duration);
  public selectedDurationOption: Duration | null = null;

  public trainingLevels = Object.values(TrainingLevel);
  public selectedTrainingLevel: TrainingLevel | null = null;

  constructor(
    private userQuestionnaireStateService: UserQuestionnaireStateService
  ) {}

  public handleTrainingTypeInputChange(trainingType: TrainingType) {
    if (this.selectedTrainigTypes.includes(trainingType)) {
      this.selectedTrainigTypes = this.selectedTrainigTypes.filter((type) => type !== trainingType);
      this.userQuestionnaireStateService.selectedTrainigTypes = this.userQuestionnaireStateService.selectedTrainigTypes.filter((type) => type !== trainingType);
    } else {
      this.selectedTrainigTypes = [...this.selectedTrainigTypes, trainingType];
      this.userQuestionnaireStateService.selectedTrainigTypes = [...this.userQuestionnaireStateService.selectedTrainigTypes, trainingType];
    }
  }

  public handleDurationInputChange(durationOption: Duration) {
    this.selectedDurationOption = durationOption;
    this.userQuestionnaireStateService.selectedDurationOption = durationOption;
  }

  public handleTrainingLevelInputChange(trainingLevel: TrainingLevel) {
    this.selectedTrainingLevel = trainingLevel;
    this.userQuestionnaireStateService.selectedTrainingLevel = trainingLevel;
  }

  public handleSubmitButtonClick(evt: Event) {
    evt.preventDefault();
    console.log(this.userQuestionnaireStateService.selectedTrainigTypes);
    console.log(this.userQuestionnaireStateService.selectedDurationOption);
    console.log(this.userQuestionnaireStateService.selectedTrainingLevel);
  };
}
