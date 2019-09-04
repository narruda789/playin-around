import { TestBed } from '@angular/core/testing';

import { SeashellLibService } from './seashell-lib.service';

describe('SeashellLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeashellLibService = TestBed.get(SeashellLibService);
    expect(service).toBeTruthy();
  });
});
