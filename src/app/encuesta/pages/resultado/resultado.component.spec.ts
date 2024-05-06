import { ResultadoComponent } from './resultado.component';
import { EncuestaService } from '../../service/encuesta.service';
import { from } from 'rxjs';

describe('ResultadoComponent', () => {
  let componente: ResultadoComponent;
  const servicio = new EncuestaService(null as any);

  beforeEach(() => {
    componente = new ResultadoComponent(servicio);
  });

  it('Debe cargar los resultados de las encuesta', () => {
    spyOn(servicio, 'getEncuestas').and.callFake(() => {
      return from([[{
        "id": 1,
        "email": "juanp@gmail.com",
        "estilo_musical": "Rock"
    },
    {
        "id": 2,
        "email": "carloss@gmail.com",
        "estilo_musical": "Pop"
    },
    {
        "id": 3,
        "email": "martaa@gmail.com",
        "estilo_musical": "Jazz"
    }]]);
    });

    componente.ngOnInit();

    expect(componente.encuestas.length).toBeGreaterThan(0);
  });
});
