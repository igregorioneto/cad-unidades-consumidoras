import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UnCadastroComponent } from './components/uns-consumidoras/un-cadastro/un-cadastro.component';
import { UnInformacaoComponent } from './components/uns-consumidoras/un-informacao/un-informacao.component';
import { UnsConsumidorasComponent } from './components/uns-consumidoras/uns-consumidoras.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch: 'full'
  },    
  {
    path:'unidades',
    component: UnsConsumidorasComponent
  },
  { 
    path:'unidades/cadastro', 
    component: UnCadastroComponent 
  },
  { 
    path:'unidades/:id/informacao', 
    component: UnInformacaoComponent 
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
