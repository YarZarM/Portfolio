import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isTabletSize = false;
  isDesktop = false;
  isMobile = false;

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.detectTablet();
  }
  
  // ngAfterViewInit() {
  //   this.detectTablet();
  // }

  openHome() {
    this.router.navigate(['/', 'dashboard'])
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
