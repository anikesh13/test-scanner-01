import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from '../../log.service';
import { regIn } from '../../model/logIn';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public heroes: Array<regIn>;
  public info: regIn = <regIn>{};

  constructor(private log: LogService,
    private router: Router) { }

  ngOnInit() {
    this.getdata();
  }

  getdata() {
    this.log.getDetails().subscribe(res => {
      this.heroes = res.body;
    })
  }

  logout() {
    localStorage.removeItem('logIn');
    this.router.navigate(['login']);
  }

  data(a) {
    this.info = a;
  }

  Submit() {
    console.log(this.info);
    this.log.regDetails(this.info).subscribe(res => {
      this.getdata();
      this.info = <regIn>{};
    });
  }

  hel(id, i?) {
    this.log.delDetails(id).subscribe(res => {
      this.heroes.splice(i, 1);
    });
  }
}
