

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastarProdutosComponent } from './components/produtos/cadastar-produtos/cadastar-produtos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
   {path:'produtos', component:ListarProdutosComponent},
   {path:'produtos/cadastrar', component:CadastarProdutosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
