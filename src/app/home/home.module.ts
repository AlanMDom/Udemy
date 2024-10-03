import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CursoModule } from '../curso/curso.module';
import { EncabezadoModule } from '../encabezado/encabezado.module';


@NgModule({
  imports: [
    CursoModule,
    EncabezadoModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
