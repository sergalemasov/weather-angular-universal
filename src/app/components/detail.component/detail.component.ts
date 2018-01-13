import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const REQUESTED_KEY_1 = makeStateKey('requested_1');

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title = 'someother';

  requested: any;

  constructor(
    private http: HttpClient,
    private state: TransferState
  ) {}

  ngOnInit() {
    this.requested = this.state.get(REQUESTED_KEY_1, null as any);

    if (this.requested) {
      return;
    }

    this.http
      .get('https://api.apixu.com/v1/current.json?key=3a290489ec4e439ab7d150803181301&q=Izhevsk')
      .subscribe(data => {
        this.requested = data;
        this.state.set(REQUESTED_KEY_1, data as any);
      })
  }
}
