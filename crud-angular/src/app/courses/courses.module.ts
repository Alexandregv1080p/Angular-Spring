import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    HttpClientModule,
    SharedModule,
    AppMaterialModule,
  ]
})
export class CoursesModule { }
