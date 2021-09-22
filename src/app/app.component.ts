import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShoppingVisibel = true;

  onShowClick(type: string) {
    this.isShoppingVisibel = type === "Recipes" ? false : true;
  }

}
