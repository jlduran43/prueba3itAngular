import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Encuesta } from '../interfaces/encuesta';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private baseUrl: string = "http://localhost:8080/api/encuestas";

  constructor(private http: HttpClient) {}

  getEncuestas(): Observable<Encuesta[]>{
    return this.http.get<Encuesta[]>(`${this.baseUrl}`);
  }

  addEncuesta( encuesta: Encuesta ): Observable<any> {
    return this.http.post<Encuesta>(`${ this.baseUrl }/registrar`, encuesta )
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
  }

  public ReturnResponseData(response: any) {
    return response;
  }

  private handleError(error: any) {
    return throwError(error);
  }
}
