import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template.component';

const routes: Routes = [
  { 
    path: '',
    component: TemplateComponent,
    children: [
      { 
        path: '', redirectTo: 'pokemons', pathMatch: 'full'
      },
      {
        path: 'pokemons',
        loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule),
        data: {
          titulo: 'Pokémons',
          descricao: 'Listagem de todos os pokémons encontrados'
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
