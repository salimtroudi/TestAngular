import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceServiceService {

  constructor(private http:HttpClient) { }
  showallsugg():Observable<Residence>
  {
    return this.http.get<Residence>('http://localhost:3000/residences')
  }

  showsugg(id:any):Observable<Residence>
  {
    return this.http.get<Residence>('http://localhost:3000/residences'+'/'+id)
  }

  delsugg(id:any):Observable<Residence>
  {
    return this.http.delete<Residence>('http://localhost:3000/residences'+'/'+id)
  }

  createsugg(res:Residence):Observable<Residence>
  {
    return this.http.post<Residence>('http://localhost:3000/residences',res)
  }

  

  //pour l'update pour pré-remplir le formulaire
  getSuggestionById(id: string) {
  return this.http.get('http://localhost:3000/residences/' + id);
  }

getSuggestionByIddetails(id: any){
  return this.http.get<Residence>(`http://localhost:3000/residences/${id}`);
}
}
