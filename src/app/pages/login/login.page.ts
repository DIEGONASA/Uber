import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  User: string = "";
  Contrasena: string = "";

  User1 = "javi";
  clave1 = "1212";

  signupView: boolean = false
  Cont: any;

  constructor(private router: Router, private menuController: MenuController, private toastController: ToastController,
    private alertController: AlertController) { this.menuController.enable(false); }

  ngOnInit() {
  }

  toggleSignUpView() {
    this.signupView = !this.signupView
  }

  irAMenu() {
    //puedo ejecutar
    this.router.navigate(['/menu']);
  }

  loguearse() {
    if (this.User == this.User1 && this.Contrasena == this.clave1) {
      this.presentAlert("Bienvenido " + this.User);
      this.router.navigate(['/home']);
      let navigationExtras: NavigationExtras = {
        state: {
          us: this.User,
          cl: this.Cont
        }
      }
      this.router.navigate(['/home'], navigationExtras);
    }
    else {
      this.presentToast('bottom', 'Usuario y/o Contraseña incorrecta');
    }
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: position
    });
    await toast.present();
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

}