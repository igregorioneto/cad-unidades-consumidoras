import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Unidade } from 'src/app/shared/interface/unidade';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-uns-consumidoras',
  templateUrl: './uns-consumidoras.component.html',
  styleUrls: ['./uns-consumidoras.component.scss']
})
export class UnsConsumidorasComponent implements OnInit {

  unidades: Unidade[] = []

  constructor(
    private unidadesService: ServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.unidadesService.listarUnidades()
    .subscribe(e => {
      this.unidades = e
    })
  }

  informacao(u: Unidade) {
    this.router.navigate([`/unidades/${u.id}/informacao`])
  }

  editarUnidade(u: Unidade) {
    this.router.navigate([`/unidades/alterar/${u.id}`])
  }

  excluirUnidade(u: Unidade) {
    this.unidadesService.excluirUnidades(Number(u.id))
    .subscribe(() => this.ngOnInit())
  }

}
