import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private produtos : Produto[] = [];  /* vai cuidar de toda a regra de negocio de produto 4 operacoes basicas, CRUD*/

  constructor() {
    /* this.inserirProduto(new Produto("camiseta", 30));
    this.inserirProduto(new Produto("calça", 80)); */

   }

  public inserirProduto(produto : Produto) : boolean
  {
    this.produtos.push(produto);
    return true;

  }

  public getProdutos() : Produto[]
  {
    return this.produtos;
  }

  public getProduto(indice : number) : Produto   /*  para retornar apenas um produto especifico */
  {
    return this.produtos[indice];
  }

  public editarProduto(indice : number, produto : Produto) : boolean
  {
     this.produtos[indice] = produto;
    /* this.produtos[indice].setNome(produto.getNome());
    this.produtos[indice].setPreco(produto.getPreco()); */
    return true;

  } 

  public excluirProduto(indice : number) : boolean
  {
    this.produtos.splice(indice, 1);   /* apagando UMA posicao que esta no indice */
    return true;
  }
}
