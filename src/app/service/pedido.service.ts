import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../pedido/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API: string = 'http://localhost:8010/api/pedido'

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.API);
  }
  save(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.API, pedido);
  }
  update(pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(this.API, pedido);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());
    return this.http.delete<any>(this.API, {params: params});
  }
}
