import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutosizeDirective } from './autosize.directive';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { ModalComponent } from './modal/modal.component';
import { AngularGooglePlaceModule } from 'angular-google-place';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    AngularGooglePlaceModule
  ],
  exports: [
    // translation
    TranslateModule,
    AutosizeDirective,
    FormsModule,
    HttpModule,
    MaterializeModule,
    ModalComponent,
    AngularGooglePlaceModule
  ],
  declarations: [AutosizeDirective, ModalComponent]
})
export class SharedModule { }
