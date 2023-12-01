import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EstoqueProds } from '../estoqueProd/estoqueProds';

@Injectable({
  providedIn: 'root'
})
export class EstoqueProdService {

  API: string  = 'http://localhost:8010/api/estoqueProd';

  http = inject(HttpClient);

  constructor() { }

  listAll():  Observable<EstoqueProds[]>{
    return this.http.get<EstoqueProds[]>(this.API);
  }
  save(estoqueProd: EstoqueProds): Observable<EstoqueProds>{
    return this.http.post<EstoqueProds>(this.API, estoqueProd);
  }
  update(estoqueProd: EstoqueProds): Observable<EstoqueProds>{
    return this.http.put<EstoqueProds>(this.API, estoqueProd);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());

  return this.http.delete<any>(this.API, {params: params} ); 
  }
}
