import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closeSideBar: boolean = true;

  closeTheSideBar(canClose: boolean) {
    this.closeSideBar = canClose;
  }
}
