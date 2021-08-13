import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FaturaServiceService } from 'src/app/shared/fatura-service.service';
import { Fatura } from 'src/app/shared/interface/fatura';

@Component({
  selector: 'app-fat-cadastro',
  templateUrl: './fat-cadastro.component.html',
  styleUrls: ['./fat-cadastro.component.scss']
})
export class FatCadastroComponent implements OnInit {
  title: string = ''
  button: string = ''

  idFat: number = 0
  idDaUnidade: number = 0

  fatura: Fatura[] = []

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

    this.routerActive.url.subscribe(i => {

      this.idDaUnidade = Number(i[1].path)

      this.verificaIdFaturaExist(i)

    })

    this.verificarSeAlteraOuCadastra(this.idFat)
    
  }

  salvarFaturaUnidade() {
    
    if(this.fatform.valid) {

      this.fatform.addControl('unidadeConsumidoraId',new FormControl(this.idDaUnidade))
      this.fatura = this.fatform.value

      if(this.title == 'CADASTRO') {
        this.cadastrarFaturaUnidade()
      }
      if(this.title == 'ALTERAR') {
        this.alterarFaturaUnidade()
      }

      this.router.navigate([`/unidades/${this.idDaUnidade}/informacao`])

    }

  }

  verificarSeAlteraOuCadastra(id: number) {
    
    id ? (this.title = 'ALTERAR',this.button = 'Alterar') : (this.title = 'CADASTRO',this.button = 'Cadastrar')
    
    if(id) {
      this.faturaService.informacaoFaturaId(id).subscribe(f => {
        
        this.fatform.get('data_de_vencimento')?.setValue(`${f.data_de_vencimento}`)
        this.fatform.get('consumo')?.setValue(`${f.consumo}`)
        this.fatform.get('valor')?.setValue(`${f.valor}`)

      })
    }

  }

  verificaIdFaturaExist(i: any) {
    return i[4] ? this.idFat = Number(i[4].path) : false
  }

  cadastrarFaturaUnidade() {

    this.faturaService.adicionarFaturaNaUnidade(this.fatura)
    .subscribe(() => {})

  }

  alterarFaturaUnidade() {
    this.faturaService.alterarFaturaDaUnidade(this.fatura, this.idFat)
    .subscribe(() => {})
  }

  cancelarCadastroFatura() {
    this.router.navigate([`/unidades/${this.idDaUnidade}/informacao`])
  }

}
