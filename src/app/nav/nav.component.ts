import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentiService } from '../Services/authenti.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private authentiService: AuthentiService, private tokenStorage: TokenStorageService, private router: Router){}

  logout(): void {
    this.authentiService.logout().subscribe({
      next: res => {
        console.log(res);
        this.tokenStorage.clean();
        this.router.navigate(['./account']);
        // window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
