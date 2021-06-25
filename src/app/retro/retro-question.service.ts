import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetroQuestion } from './retro-question';

@Injectable()
export class RetroQuestionService {
  GET_QUESTIONS_URL = 'https://lukw4l.de/teamEcho/getQuestions.php';
  GET_ANSWERS_URL = 'https://lukw4l.de/teamEcho/getRetroAnswerAggregation.php';
  PERSIST_ANSWER_URL =
    'https://lukw4l.de/teamEcho/createOrUpdateRetroAnswer.php';

  constructor(private httpClient: HttpClient) {}

  getQuestions() {
    return this.httpClient.get<RetroQuestion[]>(this.GET_QUESTIONS_URL);
  }

  getFakeQuestions() {
    let questions: RetroQuestion[] = [
      {
        ID: 1,
        Title: 'Erste Frage?',
        options: ['Keine Ahnung', 'B', 'C', 'D']
      },
      {
        ID: 2,
        Title:
          'Zweite Frage? Ganz langer Text. Zweite Frage? Ganz langer Text. Zweite Frage? Ganz langer Text. Zweite Frage? Ganz langer Text. Zweite Frage?',
        options: ['A', 'B', 'C', 'D']
      },
      {
        ID: 3,
        Title: 'Wie fühlst du dich bezogen auf unsere Ziele?',
        options: ['Ängstlich', 'Motiviert', 'Irritiert', 'Ablehnend']
      }
    ];
    return questions;
  }

  getAnswers(retroId: number, questionId: number) {
    const formData = new FormData();
    formData.append('retroId', retroId.toString());
    formData.append('questionId', questionId.toString());

    return this.httpClient
      .post<any>(this.GET_ANSWERS_URL, formData);
  }

  persistAnswer(
    retroId: number,
    userId: number,
    questionId: number,
    answer: number
  ) {
    const formData = new FormData();
    formData.append('retroId', retroId.toString());
    formData.append('userId', userId.toString());
    formData.append('questionId', questionId.toString());
    formData.append('answer', answer.toString());

    console.log(answer.toString());

    this.httpClient
      .post<any>(this.PERSIST_ANSWER_URL, formData)
      .subscribe(res => console.log(res), err => console.log(err));
  }
}
