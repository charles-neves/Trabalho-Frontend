import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VendaProduto } from '../models/venda-produto';

@Injectable({
  providedIn: 'root'
})
export class VendaProdutoService {

  constructor(private http:HttpClient) { }
 
  post(vendaProduto : VendaProduto){
    return this.http.post<VendaProduto>("http://localhost:5000/api/vendaProduto", vendaProduto );
  }

  put(vendaProduto : VendaProduto){
    return this.http.put<VendaProduto>("http://localhost:5000/api/vendaProduto", vendaProduto );
  }
  
  get(){
    return this.http.get<VendaProduto[]>("http://localhost:5000/api/vendaProduto");
  }
  getPeloId(id : number){
    return this.http.get<VendaProduto>("http://localhost:5000/api/vendaProduto/id" + id );
  }

  delete(id : number){
    return this.http.delete("http://localhost:5000/api/vendaProduto/id" + id );
  }

}
