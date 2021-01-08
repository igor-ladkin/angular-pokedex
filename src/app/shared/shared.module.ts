import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DetalharPokemonComponent } from './components/detalhar-pokemon/detalhar-pokemon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    LayoutComponent,
    DetalharPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDialogModule,
    HttpClientModule,
    MatChipsModule,
  ],
  exports: [
    LayoutComponent,
    DetalharPokemonComponent,
  ]
})
export class SharedModule { }
