import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private authService : AngularFireAuth) { }

  loginComEmailPassword(email: string, password: string){
    return this.authService.
    signInWithEmailAndPassword(email, password);
  }


  cadastrarComEmailPassword(email: string, password: string){
    return this.authService.
    createUserWithEmailAndPassword(email, password);
  }


  loginComGoogleCount(){
    return this.authLoginProvider(new GoogleAuthProvider());
  }


  authLoginProvider(provider : any){
    return this.authService.signInWithPopup(provider);
  } /* quando clica p logar serve p qualquer login externo, pop-up q aparece */


  logout(){
    return this.authService.signOut();
  }
}
