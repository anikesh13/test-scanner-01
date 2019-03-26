import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { LogService } from '../log.service';
import { logIn } from '../model/logIn';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data1: logIn = <logIn>{};
  constructor(private log: LogService,
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }

  login(data) {
    this.log.logDetails(data).subscribe(res => {
      if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('logIn', res.token)
      }
      this.router.navigate(['dashboard']);
    });
  }

  signInWithGoogle(): void {
    console.log('1');
    var t = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user3) => {
      console.log(user3);
      // localStorage.setItem('logIn', user3.authToken)
      this.router.navigate(['dashboard']);
    });
  }

  signInWithFB(): void {
    console.log('2');
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      // localStorage.setItem('logIn', user.authToken)
      this.router.navigate(['dashboard']);
    });
  }

  signInWithLinkedIn(): void {
    console.log('3');
    var t1 = this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user1) => {
      console.log(user1);
      // localStorage.setItem('logIn', user1.authToken)
      this.router.navigate(['dashboard']);
    });
  }
}
