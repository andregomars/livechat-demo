import { Component, OnInit, Inject } from '@angular/core';
// import { WINDOW } from "./../services/window.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(
  //   @Inject(WINDOW) public window: Window) {
  // }

  ngOnInit() {
    // const lcApi = this.window.LC_API;
    // if (lcApi) {
    //   lcApi.hide_chat_window();
    // }
  }
}
