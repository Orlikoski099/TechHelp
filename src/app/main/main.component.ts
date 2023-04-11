import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  userLogin = localStorage.getItem("userLogin");
  userName = localStorage.getItem("userName");

  showMenu: boolean = true;

  @HostListener('window:resize', ['$event']) 
  onResize(event: Event) {
    window.innerWidth > 700 ? this.showMenu = true : this.showMenu = false;
  }

  public innerWidth: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    window.innerWidth > 600 ? this.showMenu = true : this.showMenu = false;
  }

  menu() {
    this.router.navigate(['/home'])
  }

  userList() {
    this.router.navigate(['/home/users'])
  }

  colabList() {
    this.router.navigate(['/home/colaboradores'])
  }

  logout() {
    this.router.navigate(['/login'])
    localStorage.clear();
  }

  userInfo(user?: any) {
    if (user)
      this.router.navigate([`home/user/${user}`])
  }
}