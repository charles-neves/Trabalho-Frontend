import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MasterUsuario } from '../models/master-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MasterUsuarioService {

  constructor(private http:HttpClient) { }

  post(masterUsuario : MasterUsuario){
    return this.http.post<MasterUsuario>("http://localhost:5000/api/masterUsuario", masterUsuario);
  }

  put(masterUsuario : MasterUsuario){
    return this.http.put<MasterUsuario>("http://localhost:5000/api/masterUsuario", masterUsuario);
  }

  get(){
    return this.http.get<MasterUsuario[]>("http://localhost:5000/api/masterUsuario");
  }
  getPeloId(id : number){
    return this.http.get<MasterUsuario>("http://localhost:5000/api/masterUsuario/id" + id);
  } 

  delete(id : number){
    return this.http.get("http://localhost:5000/api/masterUsuario/id" + id);
  }

}
