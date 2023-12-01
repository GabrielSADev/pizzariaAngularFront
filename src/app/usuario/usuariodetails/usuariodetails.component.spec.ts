import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsuariodetailsComponent } from './usuariodetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../usuario';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('UsuariodetailsComponent', () => {
  let component: UsuariodetailsComponent;
  let fixture: ComponentFixture<UsuariodetailsComponent>;

  let usuarioService: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsuariodetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(UsuariodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    let usuario = new Usuario();
    usuario.id = 1;
    usuario.nomeUsuario = 'gabriel';
    usuario.telefone = '45999999999';
    component.usuario = usuario;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TESDE DE 1 @Input - INTERPOLACAO NO TEMPLATE', () =>{
    let elemento = fixture.debugElement.query(By.css('input[name="UserInput"]'));
    expect(elemento.nativeElement.ngModel).toEqual('gabriel');
  });

  it('TESTE 2 DE @Input - INTERPOLACAO NO TEMPLATE', () => {
    let elemento = fixture.debugElement.query(By.css('input[name="UserInput"]'));
    expect(elemento.nativeElement.ngModel).not.toBe(null);
  });

  beforeEach(() => {
    usuarioService = TestBed.inject(UsuarioService);
  });

  it('DEVE CHAMAR O MÉTODO SAVE AO ENVIAR PASSANDO OBJETO', fakeAsync(() => {
    let spy = spyOn(usuarioService, 'save').and.callThrough();

    let usuario = new Usuario();
    usuario.id = 1;
    usuario.nomeUsuario = 'gabriel';
    usuario.telefone = '45999999999';
    component.usuario = usuario;
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('#inputBotao');
    console.log(button);
    button.click();
  }));

  it('deve chamar o metodo deletar()', fakeAsync(() => {
    spyOn(usuarioService, 'delete').and.returnValue(of(new Usuario()));

    const usuario = new Usuario();
    usuario.id = 1;
    component.usuario = usuario;

    component.deletar();
    tick();

    expect(usuarioService.delete).toHaveBeenCalledWith(usuario.id);
  }));
});
