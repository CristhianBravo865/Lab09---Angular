import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { QuestionComponent } from './question/question';

export const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'question/:id', component: QuestionComponent },
];
