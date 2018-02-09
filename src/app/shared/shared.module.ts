import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AutosizeDirective } from './autosize.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    // translation
    TranslateModule,
    AutosizeDirective,
    FormsModule
  ],
  declarations: [AutosizeDirective]
})
export class SharedModule { }
