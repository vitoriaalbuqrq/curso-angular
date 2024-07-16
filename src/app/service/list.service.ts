import { Injectable } from '@angular/core';
import { IAnimal } from '../IAnimal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(id: number){
    return this.http.delete<IAnimal>(`${this.apiURL}/${id}`);
  }

  getAll(): Observable<IAnimal[]>{
    return this.http.get<IAnimal[]>(this.apiURL)
  }

  getItem(id: number): Observable<IAnimal>{
    return this.http.get<IAnimal>(`${this.apiURL}/${id}`);
  }
}
