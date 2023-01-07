import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: string = "diego";
  numero: string = "23.456.345-9";
  correo: string = "diego@duocuc.cl";

  constructor(private router: Router, private activedRouter: ActivatedRoute,
    private menu: MenuController) {
    this.activedRouter.queryParamMap.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['us'];
        this.numero = this.router.getCurrentNavigation()?.extras?.state?.['cl'];
      }
    })
    this.menu.enable(true);
  }

  ngOnInit() {
  }

}
