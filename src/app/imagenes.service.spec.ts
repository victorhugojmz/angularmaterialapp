/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImagenesService } from './imagenes.service';

describe('ImagenesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagenesService]
    });
  });

  it('should ...', inject([ImagenesService], (service: ImagenesService) => {
    expect(service).toBeTruthy();
  }));
});
