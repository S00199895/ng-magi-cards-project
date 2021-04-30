import { TestBed } from '@angular/core/testing';

import { FirestoreReadService } from './firestore-read.service';

describe('FirestoreReadService', () => {
  let service: FirestoreReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
