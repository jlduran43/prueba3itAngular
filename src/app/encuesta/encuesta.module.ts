import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EncuestaComponent } from './encuesta.component';
import { RouterModule } from '@angular/router';
import { ResultadoComponent } from './pages/resultado/resultado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarraComponent } from './components/barra/barra.component';
import { BaseChartDirective } from 'ng2-charts';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    EncuestaComponent,
    ResultadoComponent,
    BarraComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaseChartDirective,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    EncuestaComponent,
    ResultadoComponent,
    FormularioComponent
  ]
})
export class EncuestaModule { }
