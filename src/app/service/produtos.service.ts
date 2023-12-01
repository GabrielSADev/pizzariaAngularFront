import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../produtos/produto';
import { EstoqueProdService } from './estoque-prod.service';
import { EstoqueProds } from '../estoqueProd/estoqueProds';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  API: string = 'http://localhost:8010/api/produtos'

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.API);
  }
  save(produtos: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>(this.API, produtos);
  }
  update(produtos: Produtos): Observable<Produtos>{
    return this.http.put<Produtos>(this.API, produtos);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());
    return this.http.delete<any>(this.API, {params: params})
  }
}
