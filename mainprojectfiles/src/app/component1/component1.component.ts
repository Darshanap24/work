import { Component, OnInit } from '@angular/core';
import { GlobalToaster } from '../global/globalToaster';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {

  showToaster: boolean = false;
  constructor(public global: GlobalToaster) { }

  ngOnInit(): void {
  }

  openToast() {
    if (this.global.toast.length < 3) {
      this.global.toast.push({
        message: "This is an Info Toast message",
        type: 'Info'
      });
      this.showToaster = true;

      setTimeout(() => {
        this.global.toast.splice(-1);
      }, 7000);
    }
  }

}
