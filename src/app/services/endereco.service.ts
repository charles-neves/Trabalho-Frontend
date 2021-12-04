import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http:HttpClient) { }

  post(endereco: Endereco){
    return this.http.post<Endereco>("http://localhost:5000/api/endereco", endereco);
  }

  put(endereco : Endereco){
    return this.http.put<Endereco>("http://localhost:5000/api/endereco", endereco);
  }

  get(){
    return this.http.get<Endereco[]>("http://localhost:5000/api/endereco");
  }

  getPeloId(id : number){
    return this.http.get<Endereco>("http://localhost:5000/api/endereco/id" + id);
  }

  delete(id : number){
    return this.http.get("http://localhost:5000/api/endereco/id" + id);
  }

}
