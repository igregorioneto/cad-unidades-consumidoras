import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UnsConsumidorasComponent } from './components/uns-consumidoras/uns-consumidoras.component';
import { UnCadastroComponent } from './components/uns-consumidoras/un-cadastro/un-cadastro.component';
import { UnInformacaoComponent } from './components/uns-consumidoras/un-informacao/un-informacao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    UnsConsumidorasComponent,
    UnCadastroComponent,
    UnInformacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
