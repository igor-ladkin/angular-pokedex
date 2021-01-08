import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/template/template.module').then(m => m.TemplateModule) },
  { path: '404', loadChildren: () => import('./modules/pagina-nao-encontrada/pagina-nao-encontrada.module').then(m => m.PaginaNaoEncontradaModule) },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
