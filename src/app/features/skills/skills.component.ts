import { Component, OnInit,HostListener } from '@angular/core';
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
      "image": "../../../assets/img/pytorch.png",
      "framework": "PyTorch",
      "value": 30
    },
    {
      "image": "../../../assets/img/git.png",
      "framework": "Git",
      "value": 80
    }
  ]

  isLoading = false;
  isDesktop = false;
  isTabletSize = false;
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
    this.pr_language;
    this.framework;
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
    this.detectTablet();
  }

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    if (event.target.innerWidth > 1133) {
      console.log('des', event.target.innerWidth)
      this.isDesktop = true;
      this.isTabletSize = false;
      this.isMobile = false;
    } else if (event.target.innerWidth >= 480 && event.target.innerWidth <= 1133) {
      this.isDesktop = false;
      this.isTabletSize = true;
      this.isMobile = false;
      console.log('tablet', this.isTabletSize)
    } else if (event.target.innerWidth < 480) {
      console.log('mob', event.target.innerWidth)
      this.isDesktop = false;
      this.isTabletSize = false;
      this.isMobile = true;
    }
  }

  detectTablet() {
    if (window.innerWidth > 1133) {
      this.isDesktop = true;
      this.isTabletSize = false;
      this.isMobile = false;
    } else if (window.innerWidth >= 480 && window.innerWidth <= 1133) {
      this.isDesktop = false;
      this.isTabletSize = true;
      this.isMobile = false;
      console.log("herer")
    } else {
      this.isDesktop = false;
      this.isTabletSize = false;
      this.isMobile = true;
    }
  }  


}
