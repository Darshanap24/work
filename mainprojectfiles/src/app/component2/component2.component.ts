import { Component, OnInit } from '@angular/core';
import { GlobalToaster } from '../global/globalToaster';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  toastMsg: any;
  showToaster: boolean = false;

  constructor(public global: GlobalToaster) { }

  ngOnInit(): void {
  }

  openToast(data: any) {
    this.showToaster = true;
    if (this.global.toast.length < 3) {
      this.global.toast.push({
        message: data,
        type: 'Info'
      });
      // console.log(this.global.toast)
      setTimeout(() => {
        this.global.toast.splice(-1);
      }, 7000);
    }
  }

  closeToastNotification(event: boolean) {
    this.showToaster = event;
  }

}
