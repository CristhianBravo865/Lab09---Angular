import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'my-dream-app';
  name: string;
  email: string;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Cristhian Bravo";
    this.email = "cbravoa@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol", "Programación", "Videojuegos"];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
  showhobbies() {
    return this.showHobbies;
  }

  newHobby(hobby: any) {
  this.hobbies.push(hobby.value);
  hobby.value = "";
  return false;
}
}
