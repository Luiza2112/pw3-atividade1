import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MensagemComponent } from "./mensagem/mensagem.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, MensagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-atividade1';
}
