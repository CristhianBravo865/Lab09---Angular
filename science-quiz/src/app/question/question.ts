import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question';
import { ChangeDetectorRef } from '@angular/core';

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
  timer: number = 10;
  intervalId: any;
  timeExpired: boolean = false;
  answered: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef,
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
          this.resetState();
          this.startTimer();
        } else {
          this.router.navigate(['/results']);
        }
      }
    });
  }

  selectAnswer(answer: string) {
    if (this.answered) return;

    this.clearTimer();

    this.selectedAnswer = answer;
    this.showFeedback = true;
    this.answered = true;

    if (this.isCorrect()) {
      this.questionService.incrementScore();
    }
  }


  nextQuestion() {
    const nextIndex = this.questionIndex + 1;
    this.router.navigate(['/question', nextIndex]);
  }

  isCorrect(): boolean {
    return this.selectedAnswer === this.question.correctAnswer;
  }

  resetState() {
    this.clearTimer();
    this.selectedAnswer = '';
    this.showFeedback = false;
    this.timeExpired = false;
    this.answered = false;
  }

  startTimer() {
    this.timer = 10;
    this.timeExpired = false;

    this.intervalId = setInterval(() => {
      this.timer--;
      this.cdRef.detectChanges();

      if (this.timer === 0) {
        alert('Se te acabó el tiempo.');
        this.timeExpired = true;
        this.answered = true;
        this.selectedAnswer = '';
        this.showFeedback = true;
        clearInterval(this.intervalId);
        this.cdRef.detectChanges();
      }

    }, 1000);
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }
}
