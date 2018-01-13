import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

const REQUESTED_KEY = makeStateKey('requested');

@Component({
  templateUrl: 'index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  title = 'app';

  requested: any;
  requestedForecast: any;

  private initialRequested = {
    current: {
      condition: {}
    },
    location: {}
  };

  private initialForecast = {
    forecast: {
      forecastday: []
    }
  };

  constructor(
    private http: HttpClient,
    private state: TransferState
  ) {}

  ngOnInit() {
    const data = this.state.get(REQUESTED_KEY, null as any);

    if (data) {
      [this.requested, this.requestedForecast] = data;
      return;
    }

    this.requested = this.initialRequested;
    this.requestedForecast = this.initialForecast;
    Observable.zip(
      this.http.get('https://api.apixu.com/v1/current.json?key=3a290489ec4e439ab7d150803181301&q=Izhevsk'),
      this.http.get('https://api.apixu.com/v1/forecast.json?key=3a290489ec4e439ab7d150803181301&q=Izhevsk&days=8')
    )
      .subscribe(data => {
        this.requested = data[0];
        this.requestedForecast = data[1];

        this.state.set(REQUESTED_KEY, data as any);
      })
  }

  public get sunset(): string {
    return <string>this._fromForecastAstro('sunset');
  }

  public get sunrise(): string {
    return <string>this._fromForecastAstro('sunrise');
  }

  private _fromForecastAstro<T>(field: string): T {
    if (!(
      this.requestedForecast &&
      this.requestedForecast.forecast &&
      this.requestedForecast.forecast.forecastday &&
      this.requestedForecast.forecast.forecastday.length &&
      this.requestedForecast.forecast.forecastday[0].astro
    )) {
      return;
    }

    return this.requestedForecast.forecast.forecastday[0].astro[field];
  }
}
