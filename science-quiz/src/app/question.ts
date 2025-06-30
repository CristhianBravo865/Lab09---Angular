import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questions: Question[] = [
    {
      question: '¿Cuál es la fórmula química del agua?',
      options: ['H2O', 'CO2', 'NaCl'],
      correctAnswer: 'H2O'
    },
    {
      question: '¿Cuál es la ley de Newton que describe la acción y la reacción?',
      options: ['Primera ley', 'Segunda ley', 'Tercera ley'],
      correctAnswer: 'Tercera ley'
    },
    {
      question: '¿Cuál es el planeta más grande del sistema solar?',
      options: ['Marte', 'Júpiter', 'Saturno'],
      correctAnswer: 'Júpiter'
    },
    {
      question: '¿Cuál es el hueso más largo del cuerpo humano?',
      options: ['Fémur', 'Húmero', 'Tibia'],
      correctAnswer: 'Fémur'
    },
    {
      question: '¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en energía?',
      options: ['Fotosíntesis', 'Respiración', 'Transpiración'],
      correctAnswer: 'Fotosíntesis'
    },
    {
      question: '¿Cuál es la unidad básica de la estructura de los ácidos nucleicos (ADN y ARN)?',
      options: ['Aminoácido', 'Nucleótido', 'Glucosa'],
      correctAnswer: 'Nucleótido'
    },
    {
      question: '¿Cuál es la velocidad de la luz en el vacío?',
      options: ['300,000 km/s', '150,000 km/s', '100,000 km/s'],
      correctAnswer: '300,000 km/s'
    },
    {
      question: '¿Qué elemento químico tiene el símbolo "Fe" en la tabla periódica?',
      options: ['Hierro', 'Plomo', 'Zinc'],
      correctAnswer: 'Hierro'
    },
    {
      question: '¿Qué tipo de energía se produce a partir del núcleo de un átomo en un proceso de fusión nuclear?',
      options: ['Energía térmica', 'Energía solar', 'Energía nuclear'],
      correctAnswer: 'Energía nuclear'
    },
    {
      question: '¿Cuál es el órgano del cuerpo humano responsable de filtrar la sangre y eliminar los desechos?',
      options: ['Riñón', 'Hígado', 'Pulmón'],
      correctAnswer: 'Riñón'
    },
    {
      question: '¿Quién descubrió la ley de la gravitación universal?',
      options: ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei'],
      correctAnswer: 'Isaac Newton'
    }
  ];

  private score: number = 0; 

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }

  getQuestion(index: number): Question | null {
    return this.questions[index] || null;
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }

  incrementScore() {
    this.score++;
  }

  getScore(): number {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}
