import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalActions = new EventEmitter<string | MaterializeAction>();
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  open() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }

  close(e) {
    this.onClose.next(e);
  }

}
