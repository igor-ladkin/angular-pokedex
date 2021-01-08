import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalharPokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id){
    return this.http.get(`${ environment.api }pokemon/${ id }`);
  }
  
}
