import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {
  public formCadastrar : FormGroup;

  constructor(private _router : Router,
    private produtoService : ProdutosService,
    private _formBuilder : FormBuilder) {
      this.formCadastrar = this._formBuilder.group({
        nome : ["", [Validators.required, Validators.minLength(5)]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
        preco : ["", [Validators.required]],
        marca : ["", [Validators.required]],
        hardware : ["", [Validators.required]],
        estado : ["", [Validators.required]],
        anolanc : ["", [Validators.required]],
        rgb : ["", [Validators.required]]
                       /* colocando todos os campos, vazio pois é o valor que vem pré-escrito no formulario */
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
      
      if(this.produtoService.inserirProduto(new Produto(this.formCadastrar.controls["nome"].value,
      this.formCadastrar.controls["preco"].value,
      this.formCadastrar.controls["marca"].value,
      this.formCadastrar.controls["hardware"].value,
      this.formCadastrar.controls["estado"].value,
      this.formCadastrar.controls["anolanc"].value,
      this.formCadastrar.controls["rgb"].value

      )))
      {
      alert("Produto Salvo com Sucesso!");
      this._router.navigate(["/listaDeProdutos"]);
    }else{
      alert("Erro ao Salvar Produto!");
    }



    }
  }
