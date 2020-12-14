import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GlobalToaster {
    toasterCount: number = 0;
    toast: any = []
}

export let toasterCount: number;