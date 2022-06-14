import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  title="الصفحة غير متوفرة";
  public constructor(private titleService: Title) {
    titleService.setTitle(this.title);
   };
  ngOnInit(): void {
  }

}
