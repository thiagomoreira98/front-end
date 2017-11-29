import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { CidadesModule } from './cidades/cidades.module';
import { LinhasModule } from './linhas/linhas.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { PassageirosModule } from './passageiros/passageiros.module';
// import {LoginModule} from './login/login.module';
// import { AuthService } from './login/auth.service';
import { PassageirosService } from './passageiros/passageiros.service';

// import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CobradorsListarComponent } from './cobradors/cobradors-listar/cobradors-listar.component';
import { CobradorsFormComponent } from './cobradors/cobradors-form/cobradors-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CobradorsListarComponent,
    CobradorsFormComponent
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    CidadesModule,
    LinhasModule,
    PagamentosModule,
    PassageirosModule,
    // LoginModule,
    FormsModule
  ],
  schemas: [],
  providers: [
    // PassageirosService
    // AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }