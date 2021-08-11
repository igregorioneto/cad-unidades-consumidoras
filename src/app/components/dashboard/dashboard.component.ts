import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  unidades: any[] = []

  constructor(
    private unidadeService: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    let unidade: any[]

    this.unidadeService.listarUnidades()
    .subscribe(u => {
      unidade = u.sort((a:any, b:any) => b.id - a.id)
      this.unidades = unidade.slice(0,5)

    })
  }

  informacaoUnidade(u: any) {
    this.router.navigate([`/unidades/${u.id}/informacao`])
  }

}
