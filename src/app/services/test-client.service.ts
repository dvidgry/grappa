import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AfterRequest, BeforeRequest, GET, POST, PUT, RestClient, ObserveOptions, RestRequest } from '@elemental-concept/grappa';

@Injectable({ providedIn: 'root' })
@RestClient('http://localhost:9090/')
export class TestClientService {
  @GET('/users')
  list: () => Observable<any>;

  @GET('/users', { query: true })
  querySample: (queryParams: any) => Observable<any>;

  @GET('/users/{0}', { observe: ObserveOptions.Response })
  find: (id: number) => Observable<any>;

  @POST('/users')
  create: (user: any) => Observable<any>;

  @PUT('/users/{0}')
  update: (id: number, user: any) => Observable<any>;

  @BeforeRequest('find')
  beforeFilter(request: RestRequest) {
    request.headers[ 'X-Dummy' ] = 'Abcde';
  }

  @AfterRequest()
  afterFilter(response: Observable<any>) {
    return response.pipe(map(r => r));
  }
}
