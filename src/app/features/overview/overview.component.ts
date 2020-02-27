import { Component, TemplateRef, OnInit,HostListener } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  isLoading = false;
  isDesktop = false;
  isTabletSize = false;
  isMobile = false;
  modalRef: BsModalRef;
  config = {
    animated: true,
    class: 'modal-dialog-centered' 
  };
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
    this.detectTablet();
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  openSecondModel(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2, this.config)
  }

  openThirdModal(template3: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template3, this.config)
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
