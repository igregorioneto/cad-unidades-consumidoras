import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { FaturaServiceService } from 'src/app/shared/fatura-service.service';
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
    private faturaService: FaturaServiceService
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

      this.listagemDasFaturasDaUnidade(this.id)
    })

  }

  listagemDasFaturasDaUnidade(id: number) {
    let fatura: any[] = []

    this.faturaService.listagemFaturasDaUnidade()
    .subscribe( fat => {

      fatura = fat
      let retorno = fatura.filter(e => e.unidadeConsumidoraId == id)
      this.faturas = retorno

    })

  }

  deletarFatura(fat: any) {
    this.faturaService.excluirFaturaDaUnidade(fat.id).subscribe(() => { this.ngOnInit() })
  }

  // Caso em vez da condição dentro do filter usar este método
  // filtrandoListagemDasFaturas(e: any, id: number): any {
  //   if(e.unidadeConsumidoraId == id){return e}
  // }

}
