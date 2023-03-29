import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  showHome = false;

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['./home']);
    this.showHome = true;
  }

  navigateToWelcome() {
    this.router.navigate(['./welcome']);
    this.showHome = false;
  }

}

