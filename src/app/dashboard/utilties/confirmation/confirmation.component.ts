import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
@Output() confirmed:EventEmitter<boolean> =new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  confirmRemove(value:boolean){
    this.confirmed.emit(value);
  }

}
