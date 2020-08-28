import { NgModule } from '@angular/core';
import { ViewComponentComponent } from './view-component/view-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ViewComponentComponent
  ]
})
export class ViewModule { }
