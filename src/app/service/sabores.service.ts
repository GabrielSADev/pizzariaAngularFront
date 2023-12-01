import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Sabores } from '../sabores/sabores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaboresService {
  API: string = 'http://localhost:8010/api/sabores';

  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Sabores[]>{
    return this.http.get<Sabores[]>(this.API);
  }
  save(sabores: Sabores): Observable<Sabores>{
    return this.http.post<Sabores>(this.API,sabores);
  }
  update(sabores: Sabores): Observable<Sabores>{
    return this.http.put<Sabores>(this.API, sabores);
  }
  delete(id: number): Observable<any>{
    let params = new HttpParams()
    .set('id', id.toString());
    return this.http.delete<any>(this.API, {params: params});
  }
}

