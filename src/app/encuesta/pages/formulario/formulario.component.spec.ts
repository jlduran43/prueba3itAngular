import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';
import { FormBuilder } from '@angular/forms';
import { ValidatorsService } from '../../service/validators.service';
import { EncuestaService } from '../../service/encuesta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('Formulario Component', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>; //Para acceder a html, etc.

  beforeEach( () => {
    TestBed.configureTestingModule({      //simula modulo cualquiera
      declarations: [FormularioComponent],
      providers: [EncuestaService]
    });

    fixture = TestBed.createComponent(FormularioComponent); //crea componente.
    component = fixture.componentInstance;  //se pueden usar todos los método y funciones.
  });

  it('Debe de crearse el componente', () => {
    expect( component ).toBeTruthy();
  });
});
