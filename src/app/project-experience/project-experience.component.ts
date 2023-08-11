import { Component } from '@angular/core';

@Component({
  selector: 'app-project-experience',
  templateUrl: './project-experience.component.html',
  styleUrls: ['./project-experience.component.css']
})
export class ProjectExperienceComponent {
  projectExperiencesData = [
    {
      title: 'Minesweeper Game',
      date: 'Nov. 2022 – Dec. 2022',
      bulletPoints: [
        'Solved problems with recursive approaches.',
        'Stored data with linked data structures.',
        'Designed algorithm to implement game requirements.'
      ]
    },
    {
      title: 'Computer Simulation of a Transit System',
      date: 'Oct. 2022 – Nov. 2022',
      bulletPoints: [
        'Created a doubly-linked list to simulate getting on or off a train.',
        'Casted within an inheritance hierarchy.',
        'Designed a visual component to help users see the transit system.'
      ]
    }
  ];
}
