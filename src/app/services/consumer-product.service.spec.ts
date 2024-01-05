/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsumerProductService } from './consumer-product.service';

describe('Service: ConsumerProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumerProductService]
    });
  });

  it('should ...', inject([ConsumerProductService], (service: ConsumerProductService) => {
    expect(service).toBeTruthy();
  }));
});
