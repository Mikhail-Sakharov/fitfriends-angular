import { TestBed } from '@angular/core/testing';

import { UserQuestionnaireStateService } from './user-questionnaire-state.service';

describe('UserQuestionnaireStateService', () => {
  let service: UserQuestionnaireStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserQuestionnaireStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
