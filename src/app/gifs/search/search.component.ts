import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  
  @ViewChild('inputBuscar') inputBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsServices:GifsService){}

  buscar() {
    const valor = this.inputBuscar.nativeElement.value;

    if(valor.trim().length === 0) return;

    this.gifsServices.buscarGifs( valor );

    this.inputBuscar.nativeElement.value = '';
    
  }

}
