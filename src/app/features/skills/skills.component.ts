import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';


export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { max: 100 });
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class SkillsComponent implements OnInit {

  pr_language = [{
    "image": "../../../assets/img/type.png",
    "framework": "Typescript",
    "value": 70
  },
  {
    "image": "../../../assets/img/python.png",
    "framework": "Python",
    "value": 50
  },
  {
    "image": "../../../assets/img/css.png",
    "framework": "HTML/CSS",
    "value": 90
  },
  {
    "image": "../../../assets/img/c++.png",
    "framework": "C/C++",
    "value": 30
  },
  {
    "image": "../../../assets/img/javascript.jpg",
    "framework": "Javascript",
    "value": 70
  }
  ]

  framework = [

    {
      "image": "../../../assets/img/angular.png",
      "framework": "Angular",
      "value": 70
    },
    {
      "image": "../../../assets/img/nativesc.png",
      "framework": "NativeScript",
      "value": 50
    },
    {
      "image": "../../../assets/img/opencv.png",
      "framework": "OpenCV",
      "value": 50
    },
    {
      "image": "../../../assets/img/Pytorch.png",
      "framework": "PyTorch",
      "value": 30
    },
    {
      "image": "../../../assets/img/git.png",
      "framework": "Git",
      "value": 80
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.pr_language;
    console.log('value', this.pr_language)
    this.framework;
  }


}
