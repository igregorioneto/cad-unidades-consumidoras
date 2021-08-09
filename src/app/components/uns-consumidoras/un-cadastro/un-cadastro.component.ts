import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-un-cadastro',
  templateUrl: './un-cadastro.component.html',
  styleUrls: ['./un-cadastro.component.scss']
})
export class UnCadastroComponent {

  unidadeForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    distribuidora: new FormControl('', Validators.required),
    endereco: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private unidadeService: ServiceService
    ) { }

  salvarUnidade() {
    if(this.unidadeForm.valid) {
      this.unidadeService.criarUnidades(this.unidadeForm.value)
      .subscribe(
        ()=> {},
        (error) => { console.log(error) },
        () => {this.router.navigate(['/unidades'])
        }
      )
    }
  }

  cancelarCadastro() {
    this.router.navigate(['/unidades'])
  }

}
