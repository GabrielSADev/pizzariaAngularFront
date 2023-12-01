import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  API: string = 'http://localhost:8010/api/funcionario'

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API);
  }
  save(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.API, funcionario);
  }
  update(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.put<Funcionario>(this.API, funcionario);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());
    return this.http.delete<any>(this.API, {params: params});
  }
}
