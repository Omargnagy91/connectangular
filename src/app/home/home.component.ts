import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _title='الصفحة الرئيسية';
  constructor(
    private titleService: Title
  ) {
      titleService.setTitle(this._title);
     
    
   }

  ngOnInit(): void {
  }
 

}
