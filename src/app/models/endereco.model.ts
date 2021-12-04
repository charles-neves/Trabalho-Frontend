import { Usuario } from "./usuario.model";

export class Endereco{
    id !: number;
    usuarioId !: number;
    usuario !: Usuario;
    rua !: string;
    numero !: number;
    complemento !: string;
    bairro !: string;
    cidade !: string;
    cep !: number;

}