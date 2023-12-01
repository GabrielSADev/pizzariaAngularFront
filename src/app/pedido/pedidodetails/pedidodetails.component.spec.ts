import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PedidodetailsComponent } from './pedidodetails.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from '../pedido';

describe('PedidodetailsComponent', () => {
  let component: PedidodetailsComponent;
  let fixture: ComponentFixture<PedidodetailsComponent>;

  let pedidoService: PedidoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PedidodetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PedidodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    pedidoService = TestBed.inject(PedidoService);
    
    let pedido = new Pedido();
    pedido.observacao = 'toma';
    component.pedido = pedido;
    fixture.detectChanges();
  });

  it('deve chamar o método save ao enviar o formulário', fakeAsync(() => { //colocar o fakeAsync toda vez que rolar coisa assíncrona
    let spy = spyOn(pedidoService, 'save').and.callThrough();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit')); //solta o mesmo evento que esta na tag

    tick(); //simula uma demora assíncrona
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));

  it('deve chamar o método save ao enviar o formulário passando objeto', fakeAsync(() => {
    let spy = spyOn(pedidoService, 'save').and.callThrough();

    let pedido = new Pedido();
    pedido.observacao = 'toma';
    component.pedido = pedido;
    fixture.detectChanges();

    let form = fixture.debugElement.nativeElement.querySelector('form');
    console.log(form);
    form.dispatchEvent(new Event('ngSubmit'));

    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(pedido);
  }));

  beforeEach(() => {
    pedidoService = TestBed.inject(PedidoService);
    httpTestingController = TestBed.inject (HttpTestingController);
  });


  it('teste delete', () => {
    const idToDelete = 1;

    pedidoService.delete(idToDelete).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`http://localhost:8010/api/pedido?id=${idToDelete}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush({});
  });

});
