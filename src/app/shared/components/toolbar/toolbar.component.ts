import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private router: Router,
    ) { }

  @Output() alternarSidebar: EventEmitter<any> = new EventEmitter()

  @Input() corToolBar = '#000000';

  @Input() tituloToolBar = 'Default';

  toggleSideBar = ()=> this.alternarSidebar.emit();

}