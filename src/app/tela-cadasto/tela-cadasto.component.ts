import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './tela-cadasto.component.html',
  styleUrls: ['./tela-cadasto.component.css']
})
export class TelaCadastoComponent implements OnInit {


  usuario : Usuario = new Usuario();
  usuarios: Usuario[];
  
  form:FormGroup;
  nomeFormControl = this.fb.control('', {validators: [], updateOn: "blur"});
  emailFormControl = this.fb.control('', {validators: [Validators.required, Validators.email], updateOn: "blur"});
  senhaFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  perfilFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  dataFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});
  enderFormControl = this.fb.control('', {validators: [Validators.required], updateOn: "blur"});

  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder
    ) { 
      this.form = this.fb.group({
        nomeFormControl: this.nomeFormControl,
        emailFormControl: this.emailFormControl,
        senhaFormControl: this.senhaFormControl,
        perfilFormControl: this.perfilFormControl,
        dataFormControl: this.dataFormControl,
        enderFormControl: this.enderFormControl
        
      });
    }

  ngOnInit(): void {
  }
  
  salvar(): void {

const usuario : Usuario = this.form.value;

this.usuarioService.adicionarUsuario(usuario).

    
    if(this.form.valid){
      this.usuario.nome = this.nomeFormControl.value;
      this.usuario.senha = this.senhaFormControl.value;
      this.usuario.email = this.emailFormControl.value;
      this.usuario.perfil = this.perfilFormControl.value;


      //JSON.Stringify é utilizado para montar uma representação no formato
      //JSON de qualquer objeto
      console.log(JSON.stringify(this.usuario));
      //Service.post e submetemos com o subscribe
      //Retorno do Backend será enviado para o Subscribe
      this.usuarioService.post(this.usuario).subscribe(
        (user)=>{
          //Sucesso o que esta dentro do () é o nome da variavel recebida
          //Substituindo o usuario que eu tenho pelo novo com ID
          this.usuario = user;
        }, (erro) =>{
          //falha
          console.log(JSON.stringify(erro));
        });
      }
  }

  
}