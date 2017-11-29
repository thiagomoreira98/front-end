import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';

import { PassageirosListarComponent } from './passageiros/passageiros-listar/passageiros-listar.component'
import { PassageirosFormComponent } from './passageiros/passageiros-form/passageiros-form.component';

import { CidadesListarComponent } from './cidades/cidades-listar/cidades-listar.component';

import { LinhasListarComponent } from './linhas/linhas-listar/linhas-listar.component';

import { PagamentosListarComponent } from './pagamentos/pagamentos-listar/pagamentos-listar.component';
// import { LoginComponent } from './login/login.component'

const routes : Routes = [
    //Rota raiz
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    //home
    {
        path: 'home',
        component: HomeComponent
    },
    //Rota passageiros
    {
        path: 'passageiros',
        component: PassageirosListarComponent
    },
    {
        path: 'cidades',
        component: CidadesListarComponent
    },
    {
        path:'linhas',
        component: LinhasListarComponent
    },
    {
        path:'pagamentos',
        component: PagamentosListarComponent
    },
    {
        path:'passageiros/novo',
        component: PassageirosFormComponent
    },
    {
        path:'passageiros/:id',
        component: PassageirosFormComponent
    }

]

export const RoutingModule = RouterModule.forRoot(routes)