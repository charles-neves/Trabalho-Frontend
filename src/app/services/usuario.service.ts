import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  adicionarUsuario(nome:String, email:String, senha: String, dtborn:Date , perfil: any ){
  Usuario
  }

  post(usuario : Usuario){
    return this.http.post<Usuario>("http://localhost:5000/api/usuario", usuario );
  }

  put(usuario : Usuario){
    return this.http.put<Usuario>("http://localhost:5000/api/usuario", usuario );
  }
  
  get(){
    return this.http.get<Usuario[]>("http://localhost:5000/api/usuario");
  }
  getPeloId(id : number){
    return this.http.get<Usuario>("http://localhost:5000/api/usuario/id" + id );
  }

  delete(id : number){
    return this.http.delete("http://localhost:5000/api/usuario/id" + id );
  }

}
