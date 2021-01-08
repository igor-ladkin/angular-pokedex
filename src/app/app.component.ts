import { Component } from '@angular/core';
import { TemaService } from 'src/app/shared/services/tema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private temaService: TemaService) {
    this.temaService.update('dark-mode');
  }
}
