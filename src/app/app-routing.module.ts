import { LimitadorClienteGuard } from './guards/limitador-cliente.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './views/home/home/home.component';
import { LoginComponent } from './views/login/login/login.component';
import { ClientesComponent } from './views/clientes/clientes/clientes.component';
import { ChamadosComponent } from './views/chamados/chamados/chamados.component';

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
    data: {titulo: 'Helpr | Login'}
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
    canActivateChild:[LimitadorClienteGuard],
    component: ClientesComponent,
    data: { titulo: 'Helpr | Clientes'}
  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivateChild:[LimitadorClienteGuard],
    component: ChamadosComponent,
    data: { titulo: 'Helpr | Chamados'}
  },
  { path: 'funcionario',
  loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
  canActivateChild:[LimitadorClienteGuard],
  data: { titulo: 'Helpr | Funcionários'}
 },
  { path: 'faq',
  loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule),
  data: { titulo: 'Helpr | FAQ'}
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
