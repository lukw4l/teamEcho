import { Component } from '@angular/core';

import { members } from '../team-list';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {
  members = members;

  share() {
    window.alert('The product has been shared!');
  }
}
