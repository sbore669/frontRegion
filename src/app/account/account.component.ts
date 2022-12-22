import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentiService } from '../Services/authenti.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessagelogin = '';
  roles: string[] = [];

  forminsc: any = {
    usernamei: null,
    email: null,
    passwordi: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessageinsc = '';

  datai: any;
  errs: any;


  constructor(private authentiService: AuthentiService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.form;

    this.authentiService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveUser(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
        this.router.navigate(['/dashboard']);
        console.log(data);
      },
      err => {
        // this.errorMessagelogin = err.error.message;
        this.errorMessagelogin = "Pseudo ou mot de passe incorrect !"
        this.isLoginFailed = true;
        console.log(err);
      }
    );

  }
    onSubmit1(): void {

      const { usernamei, email, passwordi } = this.forminsc;

      this.authentiService.inscription(usernamei, email, passwordi).subscribe(
        datai => {
          console.log(datai);
          this.isSuccessful = true;
          this.router.navigate(['/dashboard']);
          this.isSignUpFailed = false;
          console.log(datai);
        },
        errs => {
          this.errorMessageinsc = errs.error.message;
          this.isSignUpFailed = true;
          this.errorMessageinsc = "Eureur lors de la creation"
          console.log(errs);
        }
      );




      // const { usernamei, email, passwordi } = this.forminsc;

      // this.authentiService.inscription(usernamei, email, passwordi).subscribe(
      //   datai => {
      //     console.log(datai);
      //     this.isSuccessful = true;
      //     // this.router.navigate(['/dashboard']);
      //     this.isSignUpFailed = false;
      //     console.log(datai);
      //   },
      //   errs => {
      //     this.errorMessageinsc = errs.error.message;
      //     this.isSignUpFailed = true;
      //     console.log(errs);
      //   }
      // );
    }
    reloadPage(): void {
      window.location.reload();
    }
 
  }
