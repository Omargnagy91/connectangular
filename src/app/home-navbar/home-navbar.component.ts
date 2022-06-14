import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {
  private _isSearchOpen:boolean;
 
 
  
  
  public get IsSearchOpen() : boolean {
    return this._isSearchOpen;
  }
  
  public set IsSearchOpen(v : boolean) {
    this._isSearchOpen = v;
  }
  constructor() { 
    this._isSearchOpen=false;
    
   
  }

  ngOnInit(): void {

  }
  ToggleSearch(e:any):void{
 
    this._isSearchOpen =!this._isSearchOpen;
    
  }

}
