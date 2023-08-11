import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData = [
    {
      institution: 'Western University',
      degree: 'Bachelor of Honors Specialization in Computer Science, Minor in Software Engineering',
      gpa: '3.7/4.0',
      duration: 'Sep. 2020 - Jun. 2025 (expected)',
      courses: 'Core courses: Analysis of Algorithms, Data Structures and Algorithms, Object Oriented Design and Analysis, Organization of Programming Languages, Computer Architecture'
    },
    {
      institution: 'Suon Academy',
      degree: 'High School',
      duration: 'Aug. 2019 - Jun. 2020'
    },
    {
      institution: 'Bishop Montgomery High School',
      degree: 'High School',
      duration: 'Sep. 2017 - Apr. 2019'
    }
  ];
}
