import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() { 
    this.init()
  }

  init(): void {
    this.insert({
      name: "Ngu Helon",
      email: "nguhelon@gmail.com",
      message: "is an angular developer"
    });
    this.insert({
      name: "Ngu Helon",
      email: "nguhelon@gmail.com",
      message: "is an angular developer"
    })
    this.insert({
      name: "Ngu Helon",
      email: "nguhelon@gmail.com",
      message: "is an angular developer"
    })
  }

  insert(message: { name: string, email: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages
  }

  deleteMessages(index: number): void {
    this.messages.splice(index, 1);
  }
}
