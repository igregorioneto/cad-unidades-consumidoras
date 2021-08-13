import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FaturaServiceService } from 'src/app/shared/fatura-service.service';
import { ServiceService } from 'src/app/shared/service.service';

import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("grafico", { static: true }) elemento!: ElementRef

  unidades: any[] = []
  semUnidades: string = 'Sem unidades cadastradas'

  totalDeUnidades: number = 0
  totalDeFaturas: number = 0

  consumoTotal: number = 0
  valorTotal: number = 0
  
  constructor(
    private unidadeService: ServiceService,
    private faturaService: FaturaServiceService,
    private router: Router
    ) { 
      Chart.register(...registerables)
    }


  ngOnInit(): void {
    
    this.informacoesDasUnidades()
    this.informacoesDasFaturas()

  }

  informacaoUnidade(u: any): void  {
    this.router.navigate([`/unidades/${u.id}/informacao`])
  }

  consumoTotalSoma(total: number, item: any): number {
    return total + item.consumo
  }

  valorTotalSoma(total: number, item: any): number {
    return total + item.valor
  }

  valorFaturasTotal(f: any): number {
    return this.totalDeFaturas = f.length
  }

  classificarUnidadesDesc(a:any, b:any): number {
    return b.id - a.id
  }

  informacoesDasUnidades(): void {
    let unidade: any[]

    this.unidadeService.listarUnidades()
    .subscribe(u => {

      unidade = u.sort(this.classificarUnidadesDesc)
      this.unidades = unidade.slice(0,5)

      this.totalDeUnidades = u.length
    })
  }

  informacoesDasFaturas(): void {
    this.faturaService.listagemFaturasDaUnidade()
    .subscribe(f => {

      this.valorFaturasTotal(f)

      this.consumoTotal = f.reduce(this.consumoTotalSoma, 0)
      this.valorTotal = f.reduce(this.valorTotalSoma, 0)

      this.greficoPizza(this.valorTotal, this.consumoTotal)

    })
  }

  greficoPizza(valor: number, consumo: number): void  {

    new Chart(this.elemento.nativeElement, {
      type: 'pie',
      data: {
        labels: ['VALOR TOTAL', 'CONSUMO TOTAL',],
        datasets: [
          {
            data: [valor, consumo],
            backgroundColor: ['#E74B4B','#C4C4C4']
          }
        ]
      }
    })

  }
  
}
