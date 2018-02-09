import { TestBed, inject } from '@angular/core/testing';

import { AuthentificationCheckService } from './authentification-check.service';

describe('AuthentificationCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentificationCheckService]
    });
  });

  it('should be created', inject([AuthentificationCheckService], (service: AuthentificationCheckService) => {
    expect(service).toBeTruthy();
  }));
});
