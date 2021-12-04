import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  post(categoria : Categoria){
    return this.http.post<Categoria>("http://localhost:5000/api/categoria", categoria);
  }

  put(categoria : Categoria){
    return this.http.put<Categoria>("http://localhost:5000/api/categoria", categoria);
  }

  get(){
    return this.http.get<Categoria[]>("http://localhost:5000/api/categoria");
  }

  getPeloId(id : number){
    return this.http.get<Categoria>("http://localhost:5000/api/categoria/id" + id);
  }

  delete(id : number){
    return this.http.delete<Categoria>("http://localhost:5000/api/categoria/id" + id);
  }

}
