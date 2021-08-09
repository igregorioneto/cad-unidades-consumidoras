import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  salvarUnidade() {
    console.log(this.unidadeForm.value)
  }

}
