import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsuariolistComponent } from './usuariolist.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsuarioService } from 'src/app/service/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../usuario';
import { of } from 'rxjs';

describe('UsuariolistComponent', () => {
  let component: UsuariolistComponent;
  let fixture: ComponentFixture<UsuariolistComponent>;
  let usuarioService: UsuarioService;

 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsuariolistComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(UsuariolistComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve popular a list de usuarios no listAll', fakeAsync(() => {
    const mockUsuarios: Usuario[] = [{id: 1, nomeUsuario: 'teste', telefone:'45999999999'},{id: 2, nomeUsuario: 'teste2', telefone: '45888989999'}];
    spyOn(usuarioService, 'listAll').and.returnValue(of(mockUsuarios));

    component.listAll();
    tick();
    fixture.detectChanges();
    expect(component.lista).toEqual(mockUsuarios);
  }));

  it('deve abrir modal ao adicionar', fakeAsync(() => {
    spyOn(component.modalService, 'open').and.returnValue({ componentInstance:{}, result: Promise.resolve('result')} as any);
    component.adicionar({} as any);
    tick();
    fixture.detectChanges();
    expect(component.modalService.open).toHaveBeenCalled();
  }));

  it('deve chamar o metodo delete em excluir', fakeAsync(() => {
    spyOn(usuarioService, 'delete').and.returnValue(of(null));
    const mockSabores = { id: 1, saborPizza: 'Teste' };

    component.excluir(mockSabores.id);
    tick();
    fixture.detectChanges();

    expect(usuarioService.delete).toHaveBeenCalledWith(mockSabores.id);
    expect(component.lista.length).toBe(0); // Assuming that the
  }))


});
