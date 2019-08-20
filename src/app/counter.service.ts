import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;
  constructor() { }

  inactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('To Active ' + this.inactiveToActiveCounter);
  }
  activeToInactive() {
    this.activeToInactiveCounter++;
    console.log('To Inactive ' + this.activeToInactiveCounter);
  }
}
