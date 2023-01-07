import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { timeStamp } from 'console';

@Component({
  selector: 'app-pedir',
  templateUrl: './pedir.page.html',
  styleUrls: ['./pedir.page.scss'],
})
export class PedirPage implements OnInit {

  constructor(
    private menu: MenuController) {this.menu.enable(true) }

  ngOnInit() {
  }

}
