import { of } from 'rxjs';
import { EncuestaService } from './encuesta.service';

describe('EncuestaService', () => {
  let service: EncuestaService;
  let httpClientSpy: { post: jasmine.Spy};

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new EncuestaService(httpClientSpy as any);
  });

  it('Debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe guardar correctamente una encuesta', (done: DoneFn) => {
    const mockEncuesta = {
      "id": 1,
      "email": "juanp@gmail.com",
      "estilo_musical": "Rock"
    }

    const mockResultado = {
      "id": 1,
      "email": "juanp@gmail.com",
      "estilo_musical": "Rock"
    }

    httpClientSpy.post.and.returnValue(of(mockResultado));

    service.addEncuesta(mockEncuesta)
      .subscribe( resultado => {
        expect(resultado).toEqual(mockResultado);
        done();
      });
  });
});
