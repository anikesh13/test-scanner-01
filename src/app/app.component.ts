import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser } from 'angularx-social-login';
import isIncognito from 'is-incognito';
import { LogService } from './log.service';
import { isPlatformBrowser } from '@angular/common';
// const isIncognito = require('is-incognito');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uni-app';
  // list = localStorage.setItem('list', JSON.stringify('resultArray.body'));
  // list1 = localStorage.setItem('list1', JSON.stringify('resultArray.body1'));
  private user: SocialUser;
  // private loggedIn: boolean;
  constructor(private authService: AuthService,
    private log: LogService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) { }


  ngOnInit() {


    this.log.getDetails().subscribe(hello => {
      // console.log(hello.body);
    })

    if (isPlatformBrowser(this.platformId)) {
      isIncognito().then(hello => {
        console.log('not private');
      }).catch(err => {
        console.log('private');
      });

      if (localStorage.getItem('logIn')) {
        console.log('log In');
        // this.router.navigate(['dashboard']);
      } else {
        console.log('not log in');
        // this.router.navigate(['login']);

      }
      // let user = JSON.parse(localStorage.getItem('list1'));
      // console.log('xxxxxxx xxxxxxxxxxxxx xxxxxxxxx logged user is ', user);
    }


  }

  signInWithGoogle(): void {
    var t = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(t);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      // this.loggedIn = (user != null);
    });
  }

  signInWithLinkedIn(): void {
    var t1 = this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
    console.log(t1);

  }

  signOut(): void {
    this.authService.signOut();
  }
 
}
