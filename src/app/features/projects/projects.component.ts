import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  isLoading = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 3000);
  }

}
