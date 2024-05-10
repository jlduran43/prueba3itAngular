import { ResultadoComponent } from './resultado.component';
import { EncuestaService } from '../../service/encuesta.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BarraComponent } from '../../components/barra/barra.component';
import { MatCardModule } from '@angular/material/card';


describe('Resultado Component', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>; //Para acceder a html, etc.

  beforeEach( () => {
    TestBed.configureTestingModule({      //simula modulo cualquiera
      declarations: [ResultadoComponent, BarraComponent],
      providers: [EncuestaService],
      imports: [HttpClientTestingModule, MatCardModule]
    });

    fixture = TestBed.createComponent(ResultadoComponent); //crea componente.
    component = fixture.componentInstance;  //se pueden usar todos los método y funciones.
  });

  it('Debe de crearse el componente', () => {
    expect( component ).toBeTruthy();
  });
});
