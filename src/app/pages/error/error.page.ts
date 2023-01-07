import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {
  item: any ={
    error:"assets/usuario/error.png"
  }
  constructor() { }

  ngOnInit() {
  }

}
