import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UnsConsumidorasComponent } from './components/uns-consumidoras/uns-consumidoras.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path:'unidades',
    component: UnsConsumidorasComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
