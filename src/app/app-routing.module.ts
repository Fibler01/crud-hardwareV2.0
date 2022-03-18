import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';

const routes: Routes = [
  {path:'listaDeProdutos', component: ListaDeProdutosComponent},  /* pacote, path, e chama o componente */
  {path:'criarProduto', component: CriarProdutoComponent},
  {path:'editarProduto/:indice', component: EditarProdutoComponent},  /* so chega na rota se passar o indice */
  {path: '**', redirectTo:"/listaDeProdutos"},       /* se colocar qualquer rota que nao exista joga para a lista de produtos */
  {path: "", redirectTo:"/listaDeProdutos", pathMatch:"full"}  /* se for vazio vai para listaDeProdutos */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
