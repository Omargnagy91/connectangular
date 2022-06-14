import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title="لوحة التحكم";
  panelOpenState = false;
  
  constructor(
    private titleservice:Title ,
    private route:Router ) { }

  ngOnInit(): void {
   
    this.titleservice.setTitle(this.title);
  }
  goToHome():void{
   this.route.navigate(['/home']); 
  }
 

}
