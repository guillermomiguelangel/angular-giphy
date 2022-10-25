import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey = '21D2QdXQ2TCP67mHYY25B9nLzF8s391L'
  private baseUrl = `https://api.giphy.com/v1/gifs`;
  private _historial:string[] = [];
  public resultados : Gif[]= [];

  get historial(){
    return [...this._historial];
  }
  
  constructor(private _http: HttpClient) {
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
  }
  
  buscarGifs(query:string){

    query = query.toLocaleLowerCase().trim();

    if(!this._historial.includes(query)){

      this._historial.unshift( query );   
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify( this._historial ));
        
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit','10')
          .set('q', query)

    this._http.get<GifsResponse>( `${this.baseUrl}/search`, {params} )
      .subscribe((gifs:any)=>{
        this.resultados = gifs.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ));
      }
    );
    
  }
}
