import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoAComponent } from './curso-a.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    CursoAComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CursoAComponent
  ]
})
export class CursoAModule { }
