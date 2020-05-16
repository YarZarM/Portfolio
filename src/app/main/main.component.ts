import { Component, OnInit } from '@angular/core';
import { PwaService } from '../services/pwa.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public Pwa: PwaService) { }

  ngOnInit(): void {
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

}
