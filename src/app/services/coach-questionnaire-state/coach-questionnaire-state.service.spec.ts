import { TestBed } from '@angular/core/testing';

import { CoachQuestionnaireStateService } from './coach-questionnaire-state.service';

describe('CoachQuestionnaireStateService', () => {
  let service: CoachQuestionnaireStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachQuestionnaireStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
