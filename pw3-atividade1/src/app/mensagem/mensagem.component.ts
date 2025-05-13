import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  imports: [],
  templateUrl: './mensagem.component.html',
  styleUrl: './mensagem.component.css'
})
export class MensagemComponent {
  @Input() tipo : boolean = false;
  @Input() nome : string = 'Marion';
  mensagem : string = '';

  processar(){
    if(this.tipo == true){
      this.mensagem = 'Bem vindo, ' + this.nome + '!';
      return this.mensagem;
    }else{
      this.mensagem = 'Falha ao autenticar.';
      return this.mensagem;
    }
  }

}
