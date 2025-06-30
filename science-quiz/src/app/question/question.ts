import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class QuestionComponent {
  questionIndex: number = 0;
  question: any;
  selectedAnswer: string = '';
  showFeedback: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.questionIndex = parseInt(id, 10);
        const questions = this.questionService.getQuestions();
        if (this.questionIndex < questions.length) {
          this.question = questions[this.questionIndex];
          this.resetState(); // ✅ Reinicia estado al cargar pregunta
        } else {
          this.router.navigate(['/results']);
        }
      }
    });
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    this.showFeedback = true;
  }

  nextQuestion() {
    const nextIndex = this.questionIndex + 1;
    this.router.navigate(['/question', nextIndex]);
  }

  isCorrect(): boolean {
    return this.selectedAnswer === this.question.correctAnswer;
  }

  resetState() {
    this.selectedAnswer = '';
    this.showFeedback = false;
  }
}
