import { Funcionario } from './../models/funcionario';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  constructor(private http: HttpClient) {}
  public findAll(): Observable<Funcionario[]> {
    return this.http
      .get<Funcionario[]>(`${API_CONFIG.baseUrl}/funcionarios`)
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return EMPTY;
        })
      );
  }
}
