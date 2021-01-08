import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule,
  ]
})
export class TemplateModule { }
