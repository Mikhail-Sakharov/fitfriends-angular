import { Injectable } from '@angular/core';
import {TrainingLevel, TrainingType} from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class CoachQuestionnaireStateService {
  public selectedTrainigTypes: TrainingType[] = [];
  public selectedTrainingLevel: TrainingLevel | null = null;
  public certificates: File[] | null = null;
  public description = '';
  public isReadyToTrain = false;
}
