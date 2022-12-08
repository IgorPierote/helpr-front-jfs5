import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) {
  }
  public findAll(): Observable<any> {
   return this.http.get(`${API_CONFIG.baseUrl}/funcionarios`).pipe(
    catchError((error: any) => {
      console.error(error)
      return EMPTY;
    })
   )
  }
}
