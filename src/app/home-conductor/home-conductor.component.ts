import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-home-conductor',
  templateUrl: './home-conductor.component.html',
  styleUrls: ['./home-conductor.component.scss']
})
export class HomeConductorComponent implements OnInit {

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
    this.modal.open();
  }

  addRoute(e) {
    console.log('modal close save ? :', e);
  }

}
