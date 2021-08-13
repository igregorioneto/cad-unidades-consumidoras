import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirMenu() {
    document.getElementById("menu")?.classList.toggle("change")
    document.getElementById("btn-menu")?.classList.toggle("change")
    document.getElementById("menu-bg")?.classList.toggle("change-bg")
  }

}
