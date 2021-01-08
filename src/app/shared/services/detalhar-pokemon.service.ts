import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DetalharPokemonComponent } from 'src/app/shared/components/detalhar-pokemon/detalhar-pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class DetalharPokemonService {

  constructor(public dialog: MatDialog) { }

  abrirDetalhe(pokemon){
    // Abre o Dialog para detalhar o pokemon
    const referenciaDiaologo = this.dialog.open(DetalharPokemonComponent, {
      // disableClose: true,
      autoFocus: false,
      data: pokemon
    })
  }

}
