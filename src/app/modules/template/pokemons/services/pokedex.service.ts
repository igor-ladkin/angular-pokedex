import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getAllPokemons(){
    return this.http.get(`${environment.api}pokemon?offset=0&limit=722`);
  }
}
