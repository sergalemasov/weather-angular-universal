import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public links: string[] = ['Link1', 'Link2', 'Link3', 'Link4', 'Link5'];
}
