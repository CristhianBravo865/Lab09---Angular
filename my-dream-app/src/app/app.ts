import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloWorldComponent } from './hello-world/hello-world';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HelloWorldComponent, 
    CommonModule,       
    RouterModule        
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Titulo';
  name = 'Cristhian Bravo';
  email = 'cbravoa@unsa.edu.pe';
  webpage = 'https://www.unsa.edu.pe/';
  hobbies = ['Leer', 'Programar', 'Correr'];
  show = false;

  toggleHobbies() {
    this.show = !this.show;
  }

  showhobbies() {
    return this.show;
  }

  newHobby(hobby: string) {
    this.hobbies.push(hobby);
  }
}

bootstrapApplication(AppComponent);
