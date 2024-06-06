import { TestBed } from '@angular/core/testing';

import { ListpostService } from './listpost.service';

describe('ListpostService', () => {
  let service: ListpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
