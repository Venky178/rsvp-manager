import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Add this

@Component({
  selector: 'app-rsvp-manager',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './rsvp-manager.component.html',
  styleUrls: ['./rsvp-manager.component.css']
})
export class RsvpManagerComponent {
  playerName = '';
  rsvpStatus: 'Yes' | 'No' | 'Maybe' | '' = '';
  rsvpEntries: Map<string, { player: { id: string; name: string }, status: 'Yes' | 'No' | 'Maybe' }> = new Map();

  get confirmed() {
    return Array.from(this.rsvpEntries.values()).filter(entry => entry.status === 'Yes');
  }

  get stats() {
    let yes = 0, no = 0, maybe = 0;
    for (const entry of this.rsvpEntries.values()) {
      if (entry.status === 'Yes') yes++;
      else if (entry.status === 'No') no++;
      else maybe++;
    }
    return { total: this.rsvpEntries.size, yes, no, maybe };
  }

  handleSubmit() {
    if (!this.playerName || !this.rsvpStatus) return;

    const id = this.playerName.trim().toLowerCase();
    const player = { id, name: this.playerName.trim() };
    const entry = { player, status: this.rsvpStatus as 'Yes' | 'No' | 'Maybe' };

    this.rsvpEntries.set(id, entry);
    this.playerName = '';
    this.rsvpStatus = '';
  }
}
