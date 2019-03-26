import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider, SocialUser } from 'angularx-social-login';
import isIncognito from 'is-incognito';
import { LogService } from './log.service';
import { isPlatformBrowser } from '@angular/common';
import { BarcodeFormat, Result } from '@zxing/library';
import { ZXingScannerComponent } from './modules/zxing-scanner/zxing-scanner.component';
import { VERSION } from '@angular/forms';
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
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  // private loggedIn: boolean;
  constructor(private authService: AuthService,
    private log: LogService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) { }


    ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;


  displayCameras(cameras: MediaDeviceInfo[]) {
    console.debug('Devices: ', cameras);
    this.availableDevices = cameras;
  }

  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selectedValue: string) {
    console.debug('Selection changed: ', selectedValue);
    this.currentDevice = this.scanner.getDeviceById(selectedValue);
  }

  stateToEmoji(state: boolean): string {

    const states = {
      // not checked
      undefined: '❔',
      // failed to check
      null: '⭕',
      // success
      true: '✔',
      // can't touch that
      false: '❌'
    };

    return states['' + state];
  }


  ngOnInit() {

    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;

      // selects the devices's back camera by default
      // for (const device of devices) {
      //     if (/back|rear|environment/gi.test(device.label)) {
      //         this.scanner.changeDevice(device);
      //         this.currentDevice = device;
      //         break;
      //     }
      // }
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);


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
