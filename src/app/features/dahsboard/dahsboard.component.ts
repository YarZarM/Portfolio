import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.scss']
})
export class DahsboardComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }

}
