import {Component, OnInit} from '@angular/core';
import {TrainingLevel, TrainingType} from 'src/app/app.constant';
import {CoachQuestionnaireStateService} from 'src/app/services/coach-questionnaire-state/coach-questionnaire-state.service';
import {SignUpStateService} from 'src/app/services/sign-up-state.service';
import {UserRegistrationService} from 'src/app/services/user-registration/user-registration.service';

@Component({
  selector: 'app-sign-up-questionnaire-coach',
  templateUrl: './sign-up-questionnaire-coach.component.html',
  styleUrls: ['./sign-up-questionnaire-coach.component.css']
})
export class SignUpQuestionnaireCoachComponent implements OnInit {
  public trainingTypes = Object.values(TrainingType);
  public selectedTrainigTypes: TrainingType[] = [];

  public trainingLevels = Object.values(TrainingLevel);
  public selectedTrainingLevel: TrainingLevel | null = null;

  public selectedCertificateFiles: File[] = [];

  public description = '';

  public isReadyToTrain = false;

  constructor(
    private signUpStateService: SignUpStateService,
    private coachQuestionnaireStateService: CoachQuestionnaireStateService,
    private userRegistrationService: UserRegistrationService
  ) {}

  public ngOnInit(): void {
    this.selectedTrainigTypes = this.coachQuestionnaireStateService.selectedTrainigTypes;
    this.selectedTrainingLevel = this.coachQuestionnaireStateService.selectedTrainingLevel;
    this.description = this.coachQuestionnaireStateService.description;
    this.isReadyToTrain = this.coachQuestionnaireStateService.isReadyToTrain;
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

  public handleTrainingLevelInputChange(trainingLevel: TrainingLevel) {
    this.selectedTrainingLevel = trainingLevel;
    this.coachQuestionnaireStateService.selectedTrainingLevel = trainingLevel;
  }

  public handleCertificateFileInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const files = target.files;
    const file = files ? files[0] : null;

    if (file) {
      this.selectedCertificateFiles = [...this.selectedCertificateFiles, file];
      this.coachQuestionnaireStateService.selectedCertificateFiles = [...this.coachQuestionnaireStateService.selectedCertificateFiles, file];
    }
  }

  public handleDescriptionTextAreaChange(evt: Event) {
    const target = evt.currentTarget as HTMLTextAreaElement;
    const description = target.value;

    this.description = description;
    this.coachQuestionnaireStateService.description = description;
  }

  public handleReadyToTrainInputChange() {
    this.isReadyToTrain = !this.isReadyToTrain;
    this.coachQuestionnaireStateService.isReadyToTrain = !this.coachQuestionnaireStateService.isReadyToTrain;
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
      this.coachQuestionnaireStateService.selectedTrainingLevel &&
      this.coachQuestionnaireStateService.selectedTrainigTypes &&
      this.coachQuestionnaireStateService.description
    ) {
      this.userRegistrationService.registerUser({
        userName: this.signUpStateService.userName,
        email: this.signUpStateService.email,
        password: this.signUpStateService.password,
        gender: this.signUpStateService.gender,
        birthday: this.signUpStateService.birthDate,
        userRole: this.signUpStateService.userRole,
        location: this.signUpStateService.location,
        trainingLevel: this.coachQuestionnaireStateService.selectedTrainingLevel,
        trainingTypes: this.coachQuestionnaireStateService.selectedTrainigTypes,
        questionnaire: {
          certificates: [],
          description: this.coachQuestionnaireStateService.description,
          isReadyToTrain: this.coachQuestionnaireStateService.isReadyToTrain
        }
      }).subscribe();
    }

    /* console.log(this.signUpStateService.avatarFile);
    console.log(this.signUpStateService.userName);
    console.log(this.signUpStateService.email);
    console.log(this.signUpStateService.birthDate);
    console.log(this.signUpStateService.location);
    console.log(this.signUpStateService.password);
    console.log(this.signUpStateService.gender);
    console.log(this.signUpStateService.userRole);

    console.log(this.coachQuestionnaireStateService.selectedTrainigTypes);
    console.log(this.coachQuestionnaireStateService.selectedTrainingLevel);
    console.log(this.coachQuestionnaireStateService.selectedCertificateFiles);
    console.log(this.coachQuestionnaireStateService.description);
    console.log(this.coachQuestionnaireStateService.isReadyToTrain); */

    /* if (avatar) {
      const file = fetch(avatar)
        .then((r) => r.blob())
        .then((blobFile) => new File([blobFile], 'avatar', {type: 'image/png'}));

      const avatarFile = await file;
      const avatarFileName = avatarFile.name;
      const avatarType = avatarFile.type.match(/(?<=\/).+/);

      const formData = new FormData();
      formData.append('avatar', avatarFile, `${avatarFileName}.${avatarType ? avatarType[0] : ''}`);
      dispatch(uploadAvatarAction(formData));
      URL.revokeObjectURL(avatar);
    }

    if (certificate) {
      const certificateName = certificate.name;
      const certificateFileType = certificate.type.match(/(?<=\/).+/);

      const formData = new FormData();
      formData.append('certificate', certificate, `${certificateName}.${certificateFileType ? certificateFileType[0] : ''}`);
      dispatch(uploadCertificateAction(formData));
    } */
  }
}
