import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  @Input() nameUser: any;

  sayHello(nameUser: string) {
    alert('Hola ' + nameUser);
  }
}
