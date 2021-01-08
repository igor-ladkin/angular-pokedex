import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaNaoEncontradaRoutingModule } from './pagina-nao-encontrada-routing.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PaginaNaoEncontradaComponent],
  imports: [
    CommonModule,
    PaginaNaoEncontradaRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PaginaNaoEncontradaModule { }
