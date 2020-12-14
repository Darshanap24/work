import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalToaster } from '../global/globalToaster';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  @Input() toastData: any;
  @Output() hideToaster = new EventEmitter<boolean>();
  counter: number = 0;
  toast: any;

  constructor(public global: GlobalToaster) { }

  ngOnInit(): void {
  }

  closeToaster(toast: any, index: any) {
    // this.hideToaster.emit(false);
    this.global.toast.splice(index, 1);
  }

  toasterTimeout(toast: any, index: any) {
    setTimeout(() => {
      this.global.toast.splice(index, 1);
    }, 7000);
  }

  resetTime(toast: any, index: any) {
    setTimeout(() => {
      this.global.toast.splice(index, 1);
    }, 7000)
  }

}
