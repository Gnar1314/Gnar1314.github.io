import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsData = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python']
    },
    {
      title: 'Software',
      skills: ['JetBrains', 'Eclipse', 'Visual Studio', 'BlueJ', 'Git']
    },
    {
      title: 'Frameworks',
      skills: ['Angular', 'Flask', 'Bootstrap']
    }
  ];

  getRandomLabel(): string {
    const labels = ['text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info', 'text-bg-light', 'text-bg-dark'];
    return labels[Math.floor(Math.random() * labels.length)];
  }
}
