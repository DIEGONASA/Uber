import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
    private menu: MenuController,
  ) {
    this.menu.enable(false);
    this.router.navigate(['home/perfil']);
  }

  cambiarPagina($event: any) {
    let direccion = $event.detail.value;
    //console.log(direccion);
    this.router.navigate(['home/' + direccion]);
  }


}
