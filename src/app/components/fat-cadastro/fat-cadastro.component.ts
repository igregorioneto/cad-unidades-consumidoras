import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaturaServiceService } from 'src/app/shared/fatura-service.service';

@Component({
  selector: 'app-fat-cadastro',
  templateUrl: './fat-cadastro.component.html',
  styleUrls: ['./fat-cadastro.component.scss']
})
export class FatCadastroComponent implements OnInit {
  idDaUnidade: number = 0
  fatura: any[] = []

  fatform = new FormGroup({
    data_de_vencimento: new FormControl('', Validators.required),
    consumo: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private routerActive: ActivatedRoute,
    private faturaService: FaturaServiceService
    ) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(
      idUnidade => this.idDaUnidade = Number(idUnidade.id))
  }

  cadastrarFaturaUnidade() {
    
    if(this.fatform.valid) {

      this.fatform.addControl('unidadeConsumidoraId',new FormControl(this.idDaUnidade))
      this.fatura = this.fatform.value
      this.faturaService.adicionarFaturaNaUnidade(this.fatura)
      .subscribe(() => {})

      this.router.navigate([`/unidades/${this.idDaUnidade}/informacao`])

    }

  }

  cancelarCadastroFatura() {
    this.router.navigate([`/unidades/${this.idDaUnidade}/informacao`])
  }

}
