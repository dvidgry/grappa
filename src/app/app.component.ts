import { Component } from '@angular/core';

import { TestClientService } from './services/test-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  output = '';

  constructor(private readonly client: TestClientService) {
  }

  listUsers() {
    this.output = 'Loading...';
    this.client.list().subscribe(this.success, this.failure);
  }

  listUsersWithQuery() {
    this.output = 'Loading...';
    this.client.querySample({ abc: 'xyz' }).subscribe(this.success, this.failure);
  }

  find() {
    this.output = 'Loading...';
    this.client.find(1).subscribe(this.success, this.failure);
  }

  create() {
    this.output = 'Loading...';
    this.client.create({ abc: 'xyz' }).subscribe(this.success, this.failure);
  }

  update() {
    this.output = 'Loading...';
    this.client.update(1, { abc: 'xyz' }).subscribe(this.success, this.failure);
  }

  private success = (response: any) => {
    this.output = `Success:\n\n${JSON.stringify(response, null, 2)}`;
  };

  private failure = (response: any) => {
    this.output = `Error:\n\n${JSON.stringify(response, null, 2)}`;
  };
}
