import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloWorldComponent } from './hello-world/hello-world';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HelloWorldComponent, // tu componente
    CommonModule,        // para *ngIf, *ngFor
    RouterModule         // para <router-outlet>
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Mi título';
  name = 'Tu nombre';
  email = 'ejemplo@email.com';
  webpage = 'https://tusitio.com';
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
