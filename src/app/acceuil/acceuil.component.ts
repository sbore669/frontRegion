import { Component } from '@angular/core';
import { PaysService } from '../Services/pays.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

    //DECLARATION DES DIFFERENTS ATTRIBUTS DE LA TABLE PAYS
    nomPays: any
    descriptionpays: any
    superfiepays: any
    densitepays: any
    imagepays: any
    pays: any;
  constructor (private paysService: PaysService,  ){}


  ngOnInit(): void {
    
  }

  ajouterPays() {
    console.log(this.nomPays);
    this.paysService.ajouterPays(this.imagepays, this.nomPays, this.descriptionpays, this.densitepays, this.superfiepays).subscribe(data => {
      console.log(data);
     // this.alet();
      // if (data.message == 'ok') {
      //   // this.alertTrue = true
      //   // this.alertFalse = false
      //   this.popUp()
      // }
    })
    

}

getAllPays(){
  this.paysService.listerPays().subscribe(data => {
    this.pays = data;
    console.log(data);
  })
}

alet(): void {
  setTimeout(() => {
    this.getAllPays();
  }, 1000);
}

}

