import { Produto } from "./produto.model";
import { Usuario } from "./usuario.model";

export class VendaProduto{
    id !: number;
    usuarioId !: number;
    usuario !: Usuario;
    produtoId !: number;
    produto !: Produto;
    quantidade !: number;
    dataVenda !: Date;

}