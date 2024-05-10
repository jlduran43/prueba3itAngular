import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaComponent } from './encuesta.component';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';

describe('EncuestaComponent', () => {
  let component: EncuestaComponent;
  let fixture: ComponentFixture<EncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncuestaComponent],
      imports: [MatIconModule, BaseChartDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
