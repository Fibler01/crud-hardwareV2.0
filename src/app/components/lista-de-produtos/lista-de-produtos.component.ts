import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.scss']
})
export class ListaDeProdutosComponent implements OnInit {  /* onInit = interface, um contrato, se tem a interface tem que ter a funcao */
  public lista_produtos : Produto[] = [];

  constructor(private _router : Router,
    private produtoService : ProdutosService) {
      
     }

  ngOnInit(): void {
    this.lista_produtos = this.produtoService.getProdutos();    /* carregando os produtos do produtos.service */
  }

  public excluir(indice : number) : void{
    let resultado = confirm("Deseja excluir o Produto: " + 
    this.produtoService.getProduto(indice).getNome() + "?");
    if(resultado)  /* se o resultado for verdade */
    {
      if(this.produtoService.excluirProduto(indice))
      {
        alert("Produto Excluído com Sucesso!");
      }else{
        alert("Erro ao excluir Produto!");
      }
    }

  }

  public editar(indice : number) : void{
    this._router.navigate(["/editarProduto", indice]);
  }

  public irParaCriarProduto() : void{
    this._router.navigate(["/criarProduto"]);  /* indo para path criarProduto */

  }

}
