import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {
  public formEditar : FormGroup;    /* ? significa que algo é facultativo */
  private indice : number =-1;


  constructor(private _router : Router,
    private _actRoute : ActivatedRoute,
    private _formBuilder : FormBuilder,
    private _produtosService : ProdutosService) { 
      this.formEditar = this._formBuilder.group({
        nome : ["", [Validators.required, Validators.minLength(5)]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
        preco : ["", [Validators.required]],
        marca : ["", [Validators.required]],
        hardware : ["", [Validators.required]],
        estado : ["", [Validators.required]],
        anolanc : ["", [Validators.required]],
        rgb : ["", [Validators.required]]              /* colocando o preco do produto que vai ser editado */
      });
    }

  ngOnInit(): void {
    this._actRoute.params.subscribe((parametros)=>{
      if(parametros["indice"]){
        this.indice= parametros["indice"];
        let produto = this._produtosService /* cria o produto */
        .getProduto(this.indice);
        this.formEditar = this._formBuilder.group({
          nome : [produto.getNome(), [Validators.required, Validators.minLength(5)]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
          preco : [produto.getPreco(), [Validators.required]],
          marca : [produto.getMarca(), [Validators.required]],
          hardware : [produto.getHardware(), [Validators.required]],
          estado : [produto.getEstado(), [Validators.required]],
          anolanc : [produto.getAnolanc(), [Validators.required]],
          rgb : [produto.getRgb(), [Validators.required]]              /* colocando o preco do produto que vai ser editado */
        });
       }
    });
  }


  private validarFormulario(){
    for (let campos in this.formEditar.controls)
    {
      this.formEditar.controls[campos].markAllAsTouched();   /* todos os campos foram tocados */
    }
  }

  public submitForm()
  {
    this.validarFormulario();
    if(!this.formEditar.valid)  /* se tentar cadastrar produto vazio n faz nada */
    {
      return;
    }
    this.salvar();
  }


    public salvar() : void{

      let produto = new Produto(
        this.formEditar.controls["nome"].value,
        this.formEditar.controls["preco"].value,
      this.formEditar.controls["marca"].value,
      this.formEditar.controls["hardware"].value,
      this.formEditar.controls["estado"].value,
      this.formEditar.controls["anolanc"].value,
      this.formEditar.controls["rgb"].value);
      if(this._produtosService.editarProduto(this.indice, produto)){
        alert("Produto Editado com Sucesso!");
        this._router.navigate(["/listaDeProdutos"]);
      }else{
        alert("Erro ao Salvar Produto!");
      }
    }
  }
