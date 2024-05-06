import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encuesta } from '../interfaces/encuesta';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private baseUrl: string = "http://localhost:8080/api/encuestas";

  constructor(private http: HttpClient) {}

  getEncuestas(): Observable<Encuesta[]>{
    return this.http.get<Encuesta[]>(`${this.baseUrl}`);
  }

  addEncuesta( encuesta: Encuesta ): Observable<Encuesta> {
    console.log(encuesta);
    return this.http.post<Encuesta>(`${ this.baseUrl }/registrar`, encuesta );
  }
}
