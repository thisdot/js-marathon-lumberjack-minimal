import { Component } from '@angular/core';
import { LumberjackService } from 'projects/lumberjack/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lumberjack-demo';

  constructor(private lumberjack: LumberjackService) {
    this.lumberjack.log('The Forest is on Fire', 'warning');
  }
}
