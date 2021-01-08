import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SidebarLinks } from 'src/app/shared/models/sidebar-links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  constructor(private elRef: ElementRef) {}

  @Input() rotas: Array<SidebarLinks>;

  @Input() corBackground;

  ngOnInit(){
    this.updateCorBackgroundLinkActive();
  }

  updateCorBackgroundLinkActive(){
    this.elRef.nativeElement.style.setProperty('--background-active',this.corBackground);
  }
}
