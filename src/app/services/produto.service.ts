import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private  http:HttpClient) { }

  post(produto: Produto){
    return this.http.post<Produto>("http://localhost:5000/api/produto", produto);
  }

  put(produto: Produto){
    return this.http.put<Produto>("http://localhost:5000/api/produto", produto);
  }

  get(){
    return this.http.get<Produto[]>("http://localhost:5000/api/produto");
  }
  getPeloId(id : number){
    return this.http.get<Produto>("http://localhost:5000/api/produto/id" + id);
  } 

  delete(id : number){
    return this.http.get("http://localhost:5000/api/produto/id" + id);
  }
}
