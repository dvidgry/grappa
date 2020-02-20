import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { angularBridge } from './ng-bridge';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  exports: []
})
export class GrappaModule {
  constructor(http: HttpClient) {
    angularBridge.register(HttpClient, http);
  }
}
