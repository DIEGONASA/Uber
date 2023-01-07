import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConducirPage } from '../pages/conducir/conducir.page';
import { PedirPage } from '../pages/pedir/pedir.page';
import { PerfilPage } from '../pages/perfil/perfil.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'perfil',
        component:PerfilPage
      },
      {
        path: 'conducir',
        component: ConducirPage
      },
      {
        path: 'pedir',
        component: PedirPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
