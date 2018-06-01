import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from "./../services/window.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // windowObj: any;

  constructor(
    @Inject(WINDOW) public window: Window) {
  } 

  ngOnInit() {
    // const lcApi = this.window.LC_API;
    // const lc = this.window.__lc;

    // if (lcApi) {
    //   lcApi.open_chat_window();
    // }

    // if (lc) {
    //   lc.params = [
    //     { name: 'phone', value: '6261112222' },
    //     { name: 'company', value: 'disney' }
    //   ];
    // }
  }
}