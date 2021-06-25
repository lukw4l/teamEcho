import { Component, OnInit } from '@angular/core';
import { RetroQuestion } from './retro-question';
import { RetroQuestionService } from './retro-question.service';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.css']
})
export class RetroComponent implements OnInit {

  questions: RetroQuestion[] = [];
  constructor(questionService: RetroQuestionService) {
    this.questions = questionService.getQuestions();
   }

  ngOnInit() {
  }

}