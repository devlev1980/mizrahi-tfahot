import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MaterialModule} from '../material.module';
import {RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    HttpClientModule
  ]
})
export class CoreModule { }
