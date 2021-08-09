import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-uns-consumidoras',
  templateUrl: './uns-consumidoras.component.html',
  styleUrls: ['./uns-consumidoras.component.scss']
})
export class UnsConsumidorasComponent implements OnInit {

  constructor(private unidadesService: ServiceService) { }

  ngOnInit(): void {
    this.unidadesService.listarUnidades()
    .subscribe(e => {
      console.log(e)
    })
  }

}
