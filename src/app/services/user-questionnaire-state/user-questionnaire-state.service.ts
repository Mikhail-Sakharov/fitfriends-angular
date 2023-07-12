import {Injectable} from '@angular/core';
import {Duration, TrainingType} from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionnaireStateService {
  public selectedTrainigTypes: TrainingType[] = [];
  public selectedDurationOption: Duration | null = null;
}
