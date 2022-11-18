import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http:HttpClient
  ) { }

  salvarPessoa(dados:any){
    return this.http.get('http://localhost/cedup/database/backend/pessoa.php',{
      params:dados
    })
  }
}
