import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { binduDetails } from './details';

@Injectable({
  providedIn: 'root'
})
export class MyDetailsService {

  constructor(private http:HttpClient) { }
  public getDetails():Observable<binduDetails>{
  const url="assets/data/bindu.json";
    return this.http.get<binduDetails>(url);
  }
}
