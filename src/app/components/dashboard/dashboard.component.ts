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
  valores: any[] = []

  totalDeUnidades: number = 0
  totalDeFaturas: number = 0
  consumoTotal: number = 0
  
  constructor(
    private unidadeService: ServiceService,
    private faturaService: FaturaServiceService,
    private router: Router
    ) { 
      Chart.register(...registerables)
    }


  ngOnInit(): void {
    
    let unidade: any[]

    this.unidadeService.listarUnidades()
    .subscribe(u => {

      unidade = u.sort((a:any, b:any) => b.id - a.id)
      this.unidades = unidade.slice(0,5)

      this.totalDeUnidades = u.length
      this.valores.push(u.length)

    })

    this.faturaService.listagemFaturasDaUnidade()
    .subscribe(f => {

      this.valorFaturasTotal(f)

      this.consumoTotal = f.reduce(this.consumoTotalSoma, 0)
      this.valores.push(f.length)
    })
    
    
    this.greficoPizza(this.valores)
  }

  informacaoUnidade(u: any) {
    this.router.navigate([`/unidades/${u.id}/informacao`])
  }

  consumoTotalSoma(total: number, item: any): number {
    return total + item.consumo
  }

  greficoPizza(...valores: any) {
    console.log(valores[0])
    new Chart(this.elemento.nativeElement, {
      type: 'pie',
      data: {
        labels: ['UNIDADES CONSUMIDORAS', 'FATURAS'],
        datasets: [
          {
            data: [2,6],
            backgroundColor: ['#E74B4B','#C4C4C4']
          }
        ]
      }
    })

  }

  valorFaturasTotal(f: any): number {
    return this.totalDeFaturas = f.length
  }

}
