import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  public promptEvent: any;
      
  constructor() {
  }

  public initPwaPrompt(){
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}