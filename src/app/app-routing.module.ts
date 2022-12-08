import { LimitadorClienteGuard } from './guards/limitador-cliente.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/clientes/clientes.module').then(m => m.ClientesModule),
    canActivateChild:[LimitadorClienteGuard]

  },
  {
    path: 'chamados',
    loadChildren: () => import('./views/chamados/chamados.module').then(m => m.ChamadosModule),
    canActivateChild:[LimitadorClienteGuard]
  },
  { path: 'funcionario', 
  loadChildren: () => import('./views/funcionarios/funcionarios.module').then(m => m.FuncionariosModule),
  canActivateChild:[LimitadorClienteGuard] }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
