import { Component, Input } from '@angular/core';
import { SidebarLinks } from 'src/app/shared/models/sidebar-links';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  titulo: String;

  descricao: string;

  @Input() corModulo;

  @Input() tituloToolBar;

  @Input() rotas: Array<SidebarLinks>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private mudancaRota: Router,
  ) {
    mudancaRota.events.subscribe((event: RouterEvent) => {
      if(event instanceof NavigationEnd) {
        this.titulo = route.snapshot.firstChild.data.titulo;
        this.descricao = route.snapshot.firstChild.data.descricao;
      }
    });
  }

  dispositivoMovel: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

}