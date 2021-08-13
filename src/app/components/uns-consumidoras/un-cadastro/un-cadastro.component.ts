import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-un-cadastro',
  templateUrl: './un-cadastro.component.html',
  styleUrls: ['./un-cadastro.component.scss']
})
export class UnCadastroComponent implements OnInit{
  title: string = ''
  button: string = ''

  id: number = 0

  unidadeForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    distribuidora: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private routerActive: ActivatedRoute,
    private unidadeService: ServiceService
    ) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(e => this.id = e.id)

    this.verificarSeAlteraOuCadastra(this.id)
  }

  salvarUnidade() {
    if(!this.id) {
      this.cadastrarUnidade()
    }
    if(this.id) {
      this.alterarUnidade(this.id)
    }
  }

  cadastrarUnidade() {
    this.unidadeService.criarUnidades(this.unidadeForm.value)
      .subscribe(
        ()=> {},
        (error) => { console.log(error) },
        () => {this.router.navigate(['/unidades'])
        }
      )
  }

  alterarUnidade(id: number) {
    this.unidadeService.alterarUnidades(this.unidadeForm.value, id)
    .subscribe(
      () => {},
      error => { console.log(error) },
      () => { this.router.navigate(['/unidades']) }
    )
  }

  cancelarCadastro() {
    this.router.navigate(['/unidades'])
  }

  verificarSeAlteraOuCadastra(id: number) {
    id ? (this.title = 'ALTERAR',this.button = 'Alterar') : (this.title = 'CADASTRO',this.button = 'Cadastrar')

    if(id) {
      this.unidadeService.informacaoUnidadeId(id).subscribe(u => {

        this.unidadeForm.get('nome')?.setValue(`${u.nome}`)
        this.unidadeForm.get('numero')?.setValue(`${u.numero}`)
        this.unidadeForm.get('distribuidora')?.setValue(`${u.distribuidora}`)
        this.unidadeForm.get('endereco')?.setValue(`${u.endereco}`)

      })
    }

  }

}
