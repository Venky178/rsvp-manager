import { Component } from '@angular/core';
import { RsvpManagerComponent } from './rsvp-manager/rsvp-manager.component'; // ✅ Import your component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RsvpManagerComponent], // ✅ Declare it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rsvp-manager';
}
