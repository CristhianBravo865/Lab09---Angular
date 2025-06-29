import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloWorldComponent } from './hello-world/hello-world';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HelloWorldComponent,
    CommonModule,
    RouterModule,
    UserComponent
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
  users = ['ryan', 'joe', 'cameron', 'john'];


  toggleHobbies() {
    this.show = !this.show;
  }

  showhobbies() {
    return this.show;
  }

  newHobby(hobby: string) {
    this.hobbies.push(hobby);
  }
  sayHello() {
    alert('Hola desde AppComponent');
  }
  deleteUser(user: string) {
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i] === user) {
      this.users.splice(i, 1);
      break;
    }
  }
}
addUser(newUser: HTMLInputElement) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
}
}
bootstrapApplication(AppComponent);
