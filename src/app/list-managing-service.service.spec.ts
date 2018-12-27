import { TestBed } from '@angular/core/testing';

import { ListManagingServiceService } from './list-managing-service.service';

describe('ListManagingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListManagingServiceService = TestBed.get(ListManagingServiceService);
    expect(service).toBeTruthy();
  });
});
