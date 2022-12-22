import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaysService } from '../Services/pays.service';
import { RegionService } from '../Services/region.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {
  isLoggedIn = true;
  roles: any;
  isLoginFailed: any;
  errormessage: any;


    //DECLARATION DES DIFFERENTS ATTRIBUT DE LA TABLE REGION
    codeRegion: any;
    domaineActivite: any;
    superficieRegion: any;
    descriptionregion: any;
    nomRegion: any;
    langue: any;
    NomPaysReions: any;
    // idpays: any;
    imageRegion: any;
  pays: any;
  
  constructor(private tokenStorage: TokenStorageService,private regionsserv: RegionService,
     private paysService: PaysService, private router: Router ) { }

  ngOnInit(): void {
    if (this.tokenStorage.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  ajouterRegion() {

    console.log(this.NomPaysReions);
    //this.getPaysParNom();
    this.regionsserv.ajouterRegion(
      this.imageRegion,
      this.codeRegion,
      this.domaineActivite,
      this.superficieRegion,
      this.descriptionregion,
      this.nomRegion,
      this.langue
    ).subscribe(data => {
      this.router.navigate(['/dashboard']);
      console.log(data);
    })

  }
  //METHODE PERMETTANT DE RECUPERER L'IMAGE DE LA REGION
  recuperationImageRegion(event: any) {

    this.imageRegion = event.target["files"][0];
    console.log(this.imageRegion)

  }
  getAllPays(){
    this.paysService.listerPays().subscribe(data => {
      this.pays = data;
      console.log(data);
    })
  }
}
