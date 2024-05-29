import { Component } from '@angular/core';
import { MessageComponent } from './message/message.component';


@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[MessageComponent]
})
export class AppComponent {
  title = 'training';
}
