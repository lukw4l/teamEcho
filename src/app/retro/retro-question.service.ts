import { Injectable } from '@angular/core';
import { RetroQuestion } from './retro-question';

@Injectable()
export class RetroQuestionService {

  constructor() { }

  getQuestions() {
    let questions: RetroQuestion[] = [
      { id: 1, title: "Erste Frage?", options: ["Keine Ahnung", "B", "C", "D"]},
      { id: 2, title: "Zweite Frage? Ganz langer Text. Zweite Frage? Ganz langer Text. Zweite Frage? Ganz langer Text. Zweite Frage? Ganz langer Text. Zweite Frage?", options: ["A", "B", "C", "D"]},
      { id: 3, title: "Wie fühlst du dich bezogen auf unsere Ziele?", options: ["Ängstlich", "Motiviert", "Irritiert", "Ablehnend"]}
    ];
    return questions;
  }

}