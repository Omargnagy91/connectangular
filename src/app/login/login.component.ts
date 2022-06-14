import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'تسجيل دخول';
 
  hide = true;
  public constructor(private titleService: Title,private route:Router
    ) {
    titleService.setTitle(this.title);
   };

  ngOnInit(): void {
  
  }
  goDashboard():void{

    this.route.navigate(['dashboard']);

  }

}
