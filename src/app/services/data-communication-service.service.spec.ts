import { TestBed } from '@angular/core/testing';

import { DataCommunicationServiceService } from './data-communication-service.service';

describe('DataCommunicationServiceService', () => {
  let service: DataCommunicationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommunicationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
