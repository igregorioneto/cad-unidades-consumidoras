import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-uns-consumidoras',
  templateUrl: './uns-consumidoras.component.html',
  styleUrls: ['./uns-consumidoras.component.scss']
})
export class UnsConsumidorasComponent implements OnInit {

  unidades: any[] = []

  constructor(
    private unidadesService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.unidadesService.listarUnidades()
    .subscribe(e => {
      this.unidades = e
      console.log(e)
    })
  }

  informacao(u: any) {
    this.router.navigate([`/unidades/${u.id}/informacao`])
    console.log(u)
  }

  excluirUnidade(u: any) {
    console.log(u)
  }

}
