import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ResultadoComponent } from './encuesta/pages/resultado/resultado.component';
import { FormularioComponent } from './encuesta/pages/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'encuesta', component: EncuestaComponent,
  },
  {
    path: 'encuesta/resultados', component: ResultadoComponent
  },
  {
    path: 'encuesta/formulario', component: FormularioComponent
  },
  {
    path: '', redirectTo: 'encuesta', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
