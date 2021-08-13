import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpen: boolean = false

  mobileMenu() {
    const menuBtn = document.querySelector('.menu-btn')
    const buttonMenu = document.querySelector('.menu-n')

    if(!this.menuOpen) {
      menuBtn?.classList.add('open')
      buttonMenu?.classList.remove('menu-esconder')
      buttonMenu?.classList.add('menu-normal')
      this.menuOpen = true
    } else {
      menuBtn?.classList.remove('open')
      buttonMenu?.classList.remove('menu-normal')
      buttonMenu?.classList.add('menu-esconder')
      this.menuOpen = false
    }  

  }
}
