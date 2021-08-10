import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-un-informacao',
  templateUrl: './un-informacao.component.html',
  styleUrls: ['./un-informacao.component.scss']
})
export class UnInformacaoComponent implements OnInit {

  unidade: any[] = []

  constructor(
    private routeAtiva: ActivatedRoute,
    private unidadeService: ServiceService
    ) { }

  ngOnInit(): void {
    let id: number = 0

    this.routeAtiva.params.subscribe(param => console.log(param))
  }

}
