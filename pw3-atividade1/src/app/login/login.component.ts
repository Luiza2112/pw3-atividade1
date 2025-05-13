import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MensagemComponent } from "../mensagem/mensagem.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MensagemComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;
  nomeUser : string = 'Marion';
  senhaUser : string = '123HAS';
  login : boolean = false;
  tipoMensagem : boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nomeUsuario : this.fb.control(''),
      senha : this.fb.control('')
    });
  }

  onAutenticar(){
    let nomeUsuario = this.loginForm.get('nomeUsuario')?.value;
    let senha = this.loginForm.get('senha')?.value;

    if(nomeUsuario == this.nomeUser && senha == this.senhaUser){
      this.login = true;
      this.tipoMensagem = true;
    }
    else{
      this.login = false;
      this.tipoMensagem = false;
    }

  }
}
