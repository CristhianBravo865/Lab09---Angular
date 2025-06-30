import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { QuestionComponent } from './question/question';
import { ResultsComponent } from './results/results';

export const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'question/:id', component: QuestionComponent },
   { path: 'results', component: ResultsComponent }
];
