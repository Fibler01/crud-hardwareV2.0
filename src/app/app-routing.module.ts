import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},   /* tela de login */
  {path: 'login', component: CadastrarComponent},
  {path:'listaDeProdutos', component: ListaDeProdutosComponent},  /* pacote, path, e chama o componente */
  {path:'criarProduto', component: CriarProdutoComponent},
  {path:'editarProduto/:indice', component: EditarProdutoComponent},  /* so chega na rota se passar o indice */
  {path: '**', redirectTo:"/login"},       /* se colocar qualquer rota que nao exista joga para a de login */
  {path: "", redirectTo:"/login", pathMatch:"full"}  /* se for vazio vai para login */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
