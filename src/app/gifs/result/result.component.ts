import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent {

  get resultados() {
    return this.gifsServices.resultados;
  }
  
  constructor(private gifsServices: GifsService) { }

}
