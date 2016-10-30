/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CyclistService } from './cyclist.service';

describe('Service: Cyclist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyclistService]
    });
  });

  it('should ...', inject([CyclistService], (service: CyclistService) => {
    expect(service).toBeTruthy();
  }));
});
