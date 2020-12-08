import { TestBed } from '@angular/core/testing';

import { YamlParserService } from './yaml-parser.service';

describe('YamlParserService', () => {
  let service: YamlParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YamlParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
