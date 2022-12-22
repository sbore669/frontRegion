import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const Url = 'http://localhost:8080/api/region'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  ajouterRegion(file: File, conderegion: any, domaineactivite: any, superficie: any, description: any, nomregion: any, langue: any): Observable<any> {
    const data: FormData = new FormData();
    const region = [{
      "coderegion": conderegion,
      "domaineactivite": domaineactivite,
      "superficie": superficie,
      "description": description,
      "nomregion": nomregion,
      "languemajoritaire": langue,
    }];

    data.append('file', file);
    data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));
    console.log("nnnnnnnnnnnnnnnnhhh: "+ data)
    return this.http.post(`${Url}/ajout_region`, data);
  }

   //METHODE PERMETTANT DE MODIFIER UNE REGION DANS LA BASE DE DONNEE
   modifierRegion(id: any, file: File, conderegion: any, domaineactivite: any, superficie: any, description: any, nomregion: any, idpays: any): Observable<any> {
    const data: FormData = new FormData();
    const region = [{
      "coderegion": conderegion,
      "domaineactivite": domaineactivite,
      "superficie": superficie,
      "description": description,
      "nomregion": nomregion,
      "idpays": idpays
    }]
    data.append('file', file);
    data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));
    return this.http.post(`${Url}/modifier_region${id}`, data);
  }

  //SUPRIMER REGION
  suprimerRegion(id:any):Observable<any>{
    return this.http.delete(`${Url}/supprimer_region/${id}`);
  }
}
