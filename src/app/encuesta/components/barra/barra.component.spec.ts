import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraComponent } from './barra.component';
import { EncuestaService } from '../../service/encuesta.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

describe('BarraComponent', () => {
  let component: BarraComponent;
  let fixture: ComponentFixture<BarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraComponent],
      providers: [EncuestaService],
      imports: [HttpClientModule, MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
