import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit{

  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'phone'},
  ]

  constructor() {}

  log(x: NgModel) {
    console.log(x);
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm);
  }

  ngOnInit(): void {
    
  }
}
