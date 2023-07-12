import {Component, OnInit} from '@angular/core';
import {Duration, TrainingLevel, TrainingType} from 'src/app/app.constant';
import {SignUpStateService} from 'src/app/services/sign-up-state.service';
import {UserQuestionnaireStateService} from 'src/app/services/user-questionnaire-state/user-questionnaire-state.service';
import {UserRegistrationService} from 'src/app/services/user-registration/user-registration.service';

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

  public totalCaloriesCount = '';
  public dailyCaloriesCount = '';

  constructor(
    private userQuestionnaireStateService: UserQuestionnaireStateService,
    private signUpStateService: SignUpStateService,
    private userRegistrationService: UserRegistrationService
  ) {}

  public ngOnInit(): void {
    this.selectedTrainigTypes = this.userQuestionnaireStateService.selectedTrainigTypes;
    this.selectedDurationOption = this.userQuestionnaireStateService.selectedDurationOption;
    this.selectedTrainingLevel = this.userQuestionnaireStateService.selectedTrainingLevel;
    this.totalCaloriesCount = this.userQuestionnaireStateService.totalCaloriesCount;
    this.dailyCaloriesCount = this.userQuestionnaireStateService.dailyCaloriesCount;
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

  public handleTotalCaloriesCountInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const value = target.value;

    this.totalCaloriesCount = value;
    this.userQuestionnaireStateService.totalCaloriesCount = value;
  }

  public handleDailyCaloriesCountInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const value = target.value;

    this.dailyCaloriesCount = value;
    this.userQuestionnaireStateService.dailyCaloriesCount = value;
  }

  public handleSubmitButtonClick(evt: Event) {
    evt.preventDefault();
    if (
      // TODO добавить сервис валидации
      this.signUpStateService.userName &&
      this.signUpStateService.email &&
      this.signUpStateService.password &&
      this.signUpStateService.gender &&
      this.signUpStateService.birthDate &&
      this.signUpStateService.userRole &&
      this.signUpStateService.location &&
      this.userQuestionnaireStateService.selectedTrainingLevel &&
      this.userQuestionnaireStateService.selectedDurationOption &&
      this.userQuestionnaireStateService.dailyCaloriesCount &&
      this.userQuestionnaireStateService.totalCaloriesCount
    ) {
      this.userRegistrationService.registerUser({
        userName: this.signUpStateService.userName,
        email: this.signUpStateService.email,
        password: this.signUpStateService.password,
        gender: this.signUpStateService.gender,
        birthday: this.signUpStateService.birthDate,
        userRole: this.signUpStateService.userRole,
        location: this.signUpStateService.location,
        trainingLevel: this.userQuestionnaireStateService.selectedTrainingLevel,
        trainingTypes: this.userQuestionnaireStateService.selectedTrainigTypes,
        questionnaire: {
          trainingDuration: this.userQuestionnaireStateService.selectedDurationOption,
          dailyCaloriesCount: Number(this.userQuestionnaireStateService.dailyCaloriesCount),
          totalCaloriesCount: Number(this.userQuestionnaireStateService.totalCaloriesCount),
          isReadyToGetTrained: true
        }
      }).subscribe();
    }
  };
}
