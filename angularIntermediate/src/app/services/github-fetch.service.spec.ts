import { TestBed } from '@angular/core/testing';

import { GithubFetchService } from './github-fetch.service';

describe('GithubFetchService', () => {
  let service: GithubFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
