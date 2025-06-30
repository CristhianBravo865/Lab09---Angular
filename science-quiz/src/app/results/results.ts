import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuestionService } from '../question';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.html',
  styleUrl: './results.css'
})
export class ResultsComponent {
  score: number = 0;
  total: number = 0;

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {
    this.score = this.questionService.getScore();
    this.total = this.questionService.getTotalQuestions();
  }

  restartGame() {
    this.questionService.resetScore();
    this.router.navigate(['/']);
  }
}
