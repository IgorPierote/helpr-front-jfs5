import { ChamadosComponent } from './views/chamados/chamados/chamados.component';
import { ClientesComponent } from './views/clientes/clientes/clientes.component';
import { HomeComponent } from './views/home/home/home.component';
import { LoginComponent } from './views/login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { titulo: 'Helpr | Página Principal'}
  },
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule),
    component: LoginComponent,
    data: {titulo: 'Login'}
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ],
    component: HomeComponent,
    data: { titulo: 'Helpr | Página Principal'}
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    component: ClientesComponent,
    data: { titulo: 'Helpr | Clientes'}
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    component: ChamadosComponent,
    data: { titulo: 'Helpr | Chamados'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
