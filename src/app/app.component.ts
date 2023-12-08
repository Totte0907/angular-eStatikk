import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eStatikk';
  
  constructor(private router:Router){}

 navigateTo(path:string): void{
  if (path === '/') {
    this.router.navigateByUrl('/');
  } else {
    this.router.navigate([path]);
  }
}
}
