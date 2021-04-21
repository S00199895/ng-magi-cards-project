import { TestBed } from '@angular/core/testing';

import { ScryfallApiService } from './scryfall-api.service';

describe('ScryfallApiService', () => {
  let service: ScryfallApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScryfallApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
