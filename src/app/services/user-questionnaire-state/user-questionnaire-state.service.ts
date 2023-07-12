import { Injectable } from '@angular/core';
import {TrainingType} from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionnaireStateService {
  public selectedTrainigTypes: TrainingType[] = [];
}
