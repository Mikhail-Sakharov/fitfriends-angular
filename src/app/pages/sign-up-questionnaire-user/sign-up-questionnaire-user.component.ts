import {Component} from '@angular/core';
import {TrainingType} from 'src/app/app.constant';

@Component({
  selector: 'app-sign-up-questionnaire-user',
  templateUrl: './sign-up-questionnaire-user.component.html',
  styleUrls: ['./sign-up-questionnaire-user.component.css']
})
export class SignUpQuestionnaireUserComponent {
  public trainingTypes = Object.values(TrainingType);
  public selectedTrainigTypes: TrainingType[] = [];

  public handleTrainingTypeInputChange(trainingType: TrainingType) {
    if (this.selectedTrainigTypes.includes(trainingType)) {
      this.selectedTrainigTypes = this.selectedTrainigTypes.filter((type) => type !== trainingType);
    } else {
      this.selectedTrainigTypes = [...this.selectedTrainigTypes, trainingType];
    }
  }
}
