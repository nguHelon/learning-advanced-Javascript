import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form-exercise',
  templateUrl: './contact-form-exercise.component.html',
  styleUrls: ['./contact-form-exercise.component.scss']
})
export class ContactFormExerciseComponent {

  categories = [
    { id: 1, category: "Development"},
    { id: 2, category: "Art"},
    { id: 3, category: "Languages"}
  ]

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
