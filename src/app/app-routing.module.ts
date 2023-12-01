import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './layout/index/index.component';
import { SaboreslistComponent } from './sabores/saboreslist/saboreslist.component';
import { SaboresdetailsComponent } from './sabores/saboresdetails/saboresdetails.component';
import { EstoquProdlistComponent } from './estoqueProd/estoqu-prodlist/estoqu-prodlist.component';
import { EstoqueProddetailsComponent } from './estoqueProd/estoque-proddetails/estoque-proddetails.component';
import { CadLoginComponent } from './sistema/cad-login/cad-login.component';
import { FuncionariolistComponent } from './funcionario/funcionariolist/funcionariolist.component';
import { FuncionariodetailsComponent } from './funcionario/funcionariodetails/funcionariodetails.component';
import { UsuariolistComponent } from './usuario/usuariolist/usuariolist.component';
import { UsuariodetailsComponent } from './usuario/usuariodetails/usuariodetails.component';
import { PizzalistComponent } from './pizza/pizzalist/pizzalist.component';
import { PizzadetailsComponent } from './pizza/pizzadetails/pizzadetails.component';
import { ProdutoslistComponent } from './produtos/produtoslist/produtoslist.component';
import { ProdutosdetailsComponent } from './produtos/produtosdetails/produtosdetails.component';
import { PedidolistComponent } from './pedido/pedidolist/pedidolist.component';
import { PedidodetailsComponent } from './pedido/pedidodetails/pedidodetails.component';

const routes: Routes = [
  { path:"", redirectTo: "login", pathMatch: 'full' },
  { path:"login", component: LoginComponent },
  {path: "admin", component: IndexComponent, children:[
    {path: "sabores", component:SaboreslistComponent},
    {path:"sabores/novo", component:SaboresdetailsComponent},
    {path: "estoqueProd", component:EstoquProdlistComponent},
    {path: "estoqueProd/novo", component: EstoqueProddetailsComponent},
    {path: "funcionarios", component: FuncionariolistComponent},
    {path: "funcionarios/novo", component: FuncionariodetailsComponent},
    {path: "usuarios", component:UsuariolistComponent},
    {path: "usuarios/novo", component:UsuariodetailsComponent},
    {path: "pizzas", component:PizzalistComponent},
    {path: "pizzas/novo", component:PizzadetailsComponent},
    {path: "produtos", component:ProdutoslistComponent},
    {path: "produtos/novo", component:ProdutosdetailsComponent},
    {path: "pedidos", component:PedidolistComponent},
    {path: "pedidos/novo", component:PedidodetailsComponent}
  ]
},
{path:"cadLogin", component: CadLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
