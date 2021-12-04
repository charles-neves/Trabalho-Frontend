import { Categoria } from "./categoria.model";
import { VendaProduto } from "./venda-produto";

export class Produto{
    id !: number;
    categoriaId !: number;
    categoria !: Categoria;
    titulo !: string;
    descricao !: string;
    valor !: number;
    vendaProdutos !: VendaProduto[];
}