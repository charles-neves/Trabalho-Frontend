import { Endereco } from "./endereco.model";
import { VendaProduto } from "./venda-produto";

export class Usuario{
    id !: number;
    nome !: string;
    dataNasci !: Date;
    email !: string;
    senha !: string;
    perfil !: string;
    enderecos !: Endereco[];
    vendaProdutos !: VendaProduto[];
}