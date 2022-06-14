import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterContentChecked {
  title = 'Connect';
  loadcompleted=false ;
  public get loaded() : boolean {
    return this.loadcompleted;
  }
  public set loaded(value : boolean) {
    this.loadcompleted = value;
  }
  
  public constructor(private titleService: Title) {
    titleService.setTitle(this.title);
   };
   ngOnInit(): void {
    this.loaded = false;
  }
  ngAfterContentChecked(): void {
    setTimeout( () => {
      this.loaded=true; 
    }, 1000);
  
  }
}
