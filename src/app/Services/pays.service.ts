import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Url = 'http://localhost:8080/api/pays'

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  pays: any;

  constructor(private http: HttpClient) { }

  ajouterPays(file: File, nom: any, description: any, densite: any, superficie: any): Observable<any> {

    const data: FormData = new FormData();
    const pays = [{
      "nom": nom,
      "description": description,
      "superficie": superficie,
      "densite": densite
    }]
    data.append('file', file);
    data.append('pays', JSON.stringify(pays).slice(1, JSON.stringify(pays).lastIndexOf(']')));
    return this.http.post(`${Url}/ajout_pays`, data);
  }
  //METHODE PERMETTANT D'avoir les pays
  listerPays(): Observable<any> {

    return this.http.get(`${Url}/liste_pays`);
  }

  //METHODE PERMETTANT D'avoir un pays apr le nom
  listerPaysParNom(nompays: any): Observable<any> {

    return this.http.get(`${Url}/liste_pays/${nompays}`);
  }
  



}
