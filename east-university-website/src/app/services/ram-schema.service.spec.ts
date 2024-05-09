import { TestBed } from '@angular/core/testing';

import { RamSchemaService } from './ram-schema.service';

describe('RamSchemaService', () => {
  let service: RamSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
