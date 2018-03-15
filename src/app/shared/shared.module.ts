import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutosizeDirective } from './autosize.directive';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  exports: [
    // translation
    TranslateModule,
    AutosizeDirective,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ModalComponent
  ],
  declarations: [AutosizeDirective, ModalComponent]
})
export class SharedModule { }
