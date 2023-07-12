import {Component, OnInit} from '@angular/core';
import {Duration, TrainingLevel, TrainingType} from 'src/app/app.constant';
import {SignUpStateService} from 'src/app/services/sign-up-state.service';
import {UserQuestionnaireStateService} from 'src/app/services/user-questionnaire-state/user-questionnaire-state.service';

@Component({
  selector: 'app-sign-up-questionnaire-user',
  templateUrl: './sign-up-questionnaire-user.component.html',
  styleUrls: ['./sign-up-questionnaire-user.component.css']
})
export class SignUpQuestionnaireUserComponent implements OnInit {
  public trainingTypes = Object.values(TrainingType);
  public selectedTrainigTypes: TrainingType[] = [];

  public durationOptions = Object.values(Duration);
  public selectedDurationOption: Duration | null = null;

  public trainingLevels = Object.values(TrainingLevel);
  public selectedTrainingLevel: TrainingLevel | null = null;

  constructor(
    private userQuestionnaireStateService: UserQuestionnaireStateService,
    private signUpStateService: SignUpStateService
  ) {}

  public ngOnInit(): void {
    this.selectedTrainigTypes = this.userQuestionnaireStateService.selectedTrainigTypes;
    this.selectedDurationOption = this.userQuestionnaireStateService.selectedDurationOption;
    this.selectedTrainingLevel = this.userQuestionnaireStateService.selectedTrainingLevel;
  }

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
    console.log(this.signUpStateService.avatarFile);
    console.log(this.signUpStateService.userName);
    console.log(this.signUpStateService.email);
    console.log(this.signUpStateService.birthDate);
    console.log(this.signUpStateService.location);
    console.log(this.signUpStateService.password);
    console.log(this.signUpStateService.gender);
    console.log(this.signUpStateService.userRole);
    console.log(this.userQuestionnaireStateService.selectedTrainigTypes);
    console.log(this.userQuestionnaireStateService.selectedDurationOption);
    console.log(this.userQuestionnaireStateService.selectedTrainingLevel);
  };
}
