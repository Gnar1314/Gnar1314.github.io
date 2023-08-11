import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperiencesData = [
    {
      position: 'Delivery Clerk | Facedrive & Fantuan delivery',
      date: 'Apr. 2021 - Apr. 2023',
      bulletPoints: [
        'Arranged the most efficient routes during peak periods to achieve structured deliveries for large volumes of orders to maximize revenue.',
        'Maintained a professional service attitude at all times to achieve a high level of customer satisfaction.',
        'Developed and adjusted contingency plans for different external conditions for high-volume periods and special events.',
        'Resolved customer issues and queries at first-contact and escalated problems in accordance with the complaints handling process.'
      ]
    },
    {
      position: 'President | Chinese Overseas Students Association',
      date: 'Apr. 2022 - Apr. 2023',
      bulletPoints: [
        'Expanded social network by negotiating more sponsorships and agreements with local businesses, attracted available funding over $15,000.',
        'Prepared financial statement analysis for the monthly expenses and potential income of the club operation.',
        'Established budget planning of the expenses required for each activity, including venue rental, transportation, food expenses, and price estimation for revenue.',
        'Organized weekly meetings with relevant departments to discuss effective usage of the fundings and allocation of tasks, tracked the progress in a timely manner.'
      ]
    }
  ];

  getFadeIn(index: number): string {
    return index % 2 === 0 ? 'fade-left' : 'fade-right';
  }
}
