import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizInfo: Quiz[];
  flag: boolean = false;
  msg: string = "Launch Quiz";
  temp = "Not Answered!";
  isChecked = false;
  indexValue = -1;
  counter = 0;

  userRef = new FormGroup({
    answer1: new FormControl(),
    answer2: new FormControl(),
    answer3: new FormControl(),
    answer4: new FormControl(),
    answer5: new FormControl(),
    answer6: new FormControl(),
    answer7: new FormControl(),
    answer8: new FormControl(),
    answer9: new FormControl(),
    answer10: new FormControl()
  })

 // constructor() { }
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }
  loadQuiz(): void {
    this.flag = true;
    this.quizService.loadQuizDetails().subscribe(data => this.quizInfo = data);
  }

  save(id, i) {
    console.log(this.quizInfo[id].answers[i].correct);
    console.log("The answer index and id is: " + id + " " + i);
    if(this.quizInfo[id].answers[i].correct) {
      this.counter = this.counter + 1;
      console.log("The value of counter is: " + this.counter);
    }
    /* if(id + 1 == 2)
    if(this.userRef.value.answer2 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 3)
    if(this.userRef.value.answer3 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 4)
    if(this.userRef.value.answer4 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 5)
    if(this.userRef.value.answer5 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 6)
    if(this.userRef.value.answer6 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 7)
    if(this.userRef.value.answer7 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 8)
    if(this.userRef.value.answer8 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 9)
    if(this.userRef.value.answer9 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1;
    }
    if(id + 1 == 10)
    if(this.userRef.value.answer10 === this.quizInfo[id].answers[i].correct) {
      console.log("The value of counter is: " + this.counter);
      this.counter = this.counter + 1; 
    }*/

    this.isChecked = !this.isChecked;
    this.temp = this.userRef.value.answer;
    console.log(this.userRef.value);
  }

  saveAll() {
    console.log("You got " + this.counter + " answers right!");
  }

}
