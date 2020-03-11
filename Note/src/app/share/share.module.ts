import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonShareComponent } from './button-share/button-share.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [ButtonShareComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ButtonShareComponent
  ]
})
export class ShareModule { }
