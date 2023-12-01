import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API: string = 'http://localhost:8010/api/usuario'

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API);
  }
  save(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API, usuario);
  }
  update(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.API, usuario);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());
    return this.http.delete<any>(this.API, {params: params})
  }
}
