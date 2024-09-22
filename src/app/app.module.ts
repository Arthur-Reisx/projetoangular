import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GuitarListComponent } from './components/guitar-list/guitar-list.component';


@NgModule({
  declarations: [
    GuitarListComponent
  ],
  imports: [
    CommonModule,    // Aqui você importa o CommonModule
    HttpClientModule
    
  ],
  exports: [
    GuitarListComponent
  ]
  
})
export class GuitarModule { }
