import { Component } from '@angular/core';
import { SidebarLinks } from 'src/app/shared/models/sidebar-links';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  rotas: Array<SidebarLinks> = [
    {
      sessao: 'Funcionalidades',
      itens: [
        {icon: 'dashboard', name: 'Pokémons', routerLink: '/template/pokemons'},
      ]
    },
  ]

  constructor() {}

}
