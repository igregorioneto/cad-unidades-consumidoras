import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-un-informacao',
  templateUrl: './un-informacao.component.html',
  styleUrls: ['./un-informacao.component.scss']
})
export class UnInformacaoComponent implements OnInit {

  id: number = 0
  nome: string = ''
  numero: string = ''
  distribuidora: string = ''
  endereco: string = ''
  faturas: any[] = []

  constructor(
    private routeAtiva: ActivatedRoute,
    private unidadeService: ServiceService,
    ) {}

  ngOnInit(): void {
    let id: number = 1

    this.routeAtiva.params.subscribe(param => id = Number(param.id))

    this.gerandoInformacoesDaUnidade(id)
    
  }

  gerandoInformacoesDaUnidade(id: number) {

    this.unidadeService.informacaoUnidadeId(id).subscribe(u => {
      this.id = u[0].id
      this.nome = u[0].nome
      this.numero = u[0].numero
      this.distribuidora = u[0].distribuidora
      this.endereco = u[0].endereco

      this.faturas = u[0].faturas
    })

  }

}
