import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  photosData = [
    'assets/photos/1.jpg',
    'assets/photos/2.jpg',
    'assets/photos/3.jpg',
    'assets/photos/4.jpg',
    'assets/photos/5.jpg',
    'assets/photos/6.jpg'
  ]

  getFadeIn(index: number): string {

    const effects = ['fadeInLeft', 'fadeInDown', 'fadeInRight', 'fadeInLeft', 'fadeInUp', 'fadeInRight'];
    return effects[index];
  }
}
