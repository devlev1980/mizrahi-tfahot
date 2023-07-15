import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material.module';
import { CustomSelectComponent } from '../../shared/components/custom-select/custom-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DogFormService } from './services/dog-form.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    CustomSelectComponent,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  providers: [DogFormService],
})
export class HomeModule {}
