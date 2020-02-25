import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  modalRef: BsModalRef;
  config = {
    animated: true,
    class: 'modal-dialog-centered' 
  };
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
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
}
