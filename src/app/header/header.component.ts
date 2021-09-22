import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  s
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('Show') Show = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ShowClick(type: string) {
    this.Show.emit(type);
  }

}
