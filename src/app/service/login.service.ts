import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../sistema/cad-login/login';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { User } from '../sistema/user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8010/api/user';
  http = inject(HttpClient);

  constructor() { }

  logar(login: Login):Observable<User>{
    return this.http.post<User>(this.API, login);
  }

  deslogar(): Observable<any>{
    return this.http.get(this.API + '/deslogar');
  }

  addToken(token: string){
    localStorage.setItem('token', token);
  }
  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasPermission(roleToCheck:any) {
    const userToken = this.getToken();

    if (userToken) {
      try {
        const decodedToken = jwtDecode<JwtPayload>(userToken) as User;
        if (decodedToken && decodedToken.role.includes(roleToCheck)) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return false;
      }
    } else {
      console.error('Token de usuário não encontrado');
      return false;
    }
  }

}
