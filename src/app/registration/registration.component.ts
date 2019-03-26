import { Component, OnInit } from '@angular/core';
import { regIn } from '../model/logIn';
import { LogService } from '../log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public info: regIn = <regIn>{};
  constructor(private log: LogService,
    private router:Router) { }

  ngOnInit() {
  }

  Submit() {
    console.log(this.info);
    this.log.regDetails(this.info).subscribe(data => {
      // console.log(data);
      
    });
  }

  login() {
    this.router.navigate(['login']);
  }
}
