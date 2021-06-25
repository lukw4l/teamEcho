import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RetroQuestion } from './retro-question';
import { RetroQuestionService } from './retro-question.service';

@Component({
  selector: 'app-retro',
  templateUrl: './retro.component.html',
  styleUrls: ['./retro.component.css']
})
export class RetroComponent implements OnInit {
  questions: RetroQuestion[] = [];
  retroForm: FormGroup;

  constructor(
    private questionService: RetroQuestionService,
    private formBuilder: FormBuilder
  ) {
    this.questions = this.questionService.getFakeQuestions();
  }

  get form() {
    return this.retroForm.controls;
  }

  ngOnInit() {
    /*this.questionService.getQuestions().subscribe(data => {
      for (let question of data) {
        question.options = [
          question.Option1,
          question.Option2,
          question.Option3,
          question.Option4
        ];
        this.questions.push(question);
      }
      console.log(this.questions);
    });*/

    this.retroForm = this.formBuilder.group(this.formFields());
    console.log(this.questionService.getAnswers(1, 1));
  }

  formFields() {
    let fields = {};
    for (let question of this.questions) {
      fields['radio' + question.ID] = new FormControl();
    }
    fields['retroId'] = new FormControl();
    fields['userId'] = new FormControl();
    return fields;
  }

  onSubmit() {
    let retroId = this.form.retroId.value;
    let userId = this.form.userId.value;

    let q1 = this.form.radio1.value;
    let q2 = this.form.radio2.value;
    let q3 = this.form.radio3.value;

    this.questionService.persistAnswer(retroId, userId, 1, q1);
    this.questionService.persistAnswer(retroId, userId, 2, q2);
    this.questionService.persistAnswer(retroId, userId, 3, q3);

    /* TODO make dynamic
    for (let question of this.questions) {
      console.log(this.form.question.id);
    }
    */
  }
}
