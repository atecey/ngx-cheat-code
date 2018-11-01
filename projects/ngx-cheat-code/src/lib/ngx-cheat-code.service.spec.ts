import { TestBed } from '@angular/core/testing';

import { NgxCheatCodeService } from './ngx-cheat-code.service';

describe('NgxCheatCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCheatCodeService = TestBed.get(NgxCheatCodeService);
    expect(service).toBeTruthy();
  });
});
