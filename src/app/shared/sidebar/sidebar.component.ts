import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial () {
    return this.gifsServices.historial;
  }
  
  constructor(private gifsServices:GifsService) { }

  buscar(termino:string){
    console.log(termino);
    
    this.gifsServices.buscarGifs(termino);
  }

}
