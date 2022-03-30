import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  public formCadastrar : FormGroup;

  constructor(private _router : Router,
    private _formBuilder : FormBuilder,
    private usuarioService : UsuarioService) {
      this.formCadastrar = this._formBuilder.group({
        email : ["", [Validators.required, Validators.email]],                  /* o segundo parametro sao os validadores, validators do angular forms, nome deve ter 5 caracteres */
        password : ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword : ["", [Validators.required, Validators.minLength(6)]]
     });
    }

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
    this.cadastrar();
  }

  cadastrar() {
    if(this.formCadastrar.controls['password'].value == 
    this.formCadastrar.controls['confirmPassword'].value)
    {
    this.usuarioService.cadastrarComEmailPassword(this.formCadastrar.controls['email'].value, 
    this.formCadastrar.controls['password'].value)
    .then(()=>{
      alert("Cadastro Efetuado com Sucesso!");
      this._router.navigate(["/login"]);
    })
    .catch((error)=>{
      alert("Erro ao efetuar cadastro, tente novamente!");
      console.log(error);
    })
  }else{
    alert("As senhas não conferem!");
  }
}

}