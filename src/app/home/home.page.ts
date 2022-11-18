import { Component } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome:string = '';
  constructor(
    public requisicao_service:RequisicaoService
  ) {}

  salvar(){
    this.requisicao_service.salvarPessoa({
      nome:this.nome,
      data:new Date().getTime()
    }).subscribe(

      (resposta) => {
        console.log(resposta);
      }
    );
  }
}
