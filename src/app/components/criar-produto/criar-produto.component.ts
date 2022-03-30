import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutofirebaseService } from 'src/app/services/produtofirebase.service';


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {
  public formCadastrar : FormGroup;

  constructor(private _router : Router,
    private produtoService : ProdutofirebaseService,
    private _formBuilder : FormBuilder) {
      this.formCadastrar = this._formBuilder.group({
        nome : ["", [Validators.required, Validators.minLength(5)]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
        preco : ["", [Validators.required]],               /* colocando todos os campos, vazio pois é o valor que vem pré-escrito no formulario */
        marca : ["", [Validators.required]],
        hardware : ["", [Validators.required]],
        estado : ["", [Validators.required]],
        anolanc : ["", [Validators.required]],
        rgb : ["", [Validators.required]]
      });
     }  /* injetando o service produtoservice */

  ngOnInit(): void {
  }

  private validarFormulario(){
    for (let campos in this.formCadastrar.controls)
    {
      this.formCadastrar.controls[campos].markAllAsTouched();   /* todos os campos foram tocados */
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formCadastrar.valid)  /* se tentar cadastrar produto vazio n faz nada */
    {
      return;
    }
    this.salvar();
  }
    public salvar() : void{
      this.produtoService.
      criarProduto(this.formCadastrar.value)
      .then(()=>{alert("Produto Salvo com Sucesso!");
      this._router.navigate(["/listaDeProdutos"]);})
      .catch((error)=>{
        console.log(error)
        alert("Erro ao Salvar Produto!");})


  



    }
  }
