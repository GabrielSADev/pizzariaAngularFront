import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaboreslistComponent } from './sabores/saboreslist/saboreslist.component';
import { SaboresdetailsComponent } from './sabores/saboresdetails/saboresdetails.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IndexComponent } from './layout/index/index.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstoqueProddetailsComponent } from './estoqueProd/estoque-proddetails/estoque-proddetails.component';
import { EstoquProdlistComponent } from './estoqueProd/estoqu-prodlist/estoqu-prodlist.component';
import { CadLoginComponent } from './sistema/cad-login/cad-login.component';
import { UsuariolistComponent } from './usuario/usuariolist/usuariolist.component';
import { UsuariodetailsComponent } from './usuario/usuariodetails/usuariodetails.component';
import { FuncionariolistComponent } from './funcionario/funcionariolist/funcionariolist.component';
import { FuncionariodetailsComponent } from './funcionario/funcionariodetails/funcionariodetails.component';
import { EnderecolistComponent } from './endereco/enderecolist/enderecolist.component';
import { EnderecodetailsComponent } from './endereco/enderecodetails/enderecodetails.component';
import { PizzalistComponent } from './pizza/pizzalist/pizzalist.component';
import { PizzadetailsComponent } from './pizza/pizzadetails/pizzadetails.component';
import { ProdutosdetailsComponent } from './produtos/produtosdetails/produtosdetails.component';
import { ProdutoslistComponent } from './produtos/produtoslist/produtoslist.component';
import { PedidolistComponent } from './pedido/pedidolist/pedidolist.component';
import { PedidodetailsComponent } from './pedido/pedidodetails/pedidodetails.component';
import { httpInterceptorProviders } from './interceptors/httpinterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    SaboreslistComponent,
    SaboresdetailsComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    EstoqueProddetailsComponent,
    EstoquProdlistComponent,
    CadLoginComponent,
    UsuariolistComponent,
    UsuariodetailsComponent,
    FuncionariolistComponent,
    FuncionariodetailsComponent,
    EnderecolistComponent,
    EnderecodetailsComponent,
    PizzalistComponent,
    PizzadetailsComponent,
    ProdutosdetailsComponent,
    ProdutoslistComponent,
    PedidolistComponent,
    PedidodetailsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
