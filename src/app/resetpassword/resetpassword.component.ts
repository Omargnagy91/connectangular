import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
 title="تغيير كلمة السر";
  hide=true;
  public constructor(private titleService: Title) {
    titleService.setTitle(this.title);
   };

  ngOnInit(): void {
  }

}
