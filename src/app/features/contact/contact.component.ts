import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isLoading = false;
  isDesktop = false;
  isTabletSize = false;
  isMobile = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
    this.detectTablet();
  }

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    if (event.target.innerWidth > 1133) {
      this.isDesktop = true;
      this.isTabletSize = false;
      this.isMobile = false;
    } else if (event.target.innerWidth >= 501 && event.target.innerWidth <= 1133) {
      this.isDesktop = false;
      this.isTabletSize = true;
      this.isMobile = false;
    } else if (event.target.innerWidth < 501) {
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
    } else if (window.innerWidth >= 501 && window.innerWidth <= 1133) {
      this.isDesktop = false;
      this.isTabletSize = true;
      this.isMobile = false;
    } else {
      this.isDesktop = false;
      this.isTabletSize = false;
      this.isMobile = true;
    }
  }

}
