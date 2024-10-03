import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoBComponent } from './curso-b.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CursoBComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CursoBComponent
  ]
})
export class CursoBModule { }
