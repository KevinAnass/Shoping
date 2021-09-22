import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../Shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output('NewShopping') NewShopping = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onNew(name: string, ammount: string) {
    this.NewShopping.emit(new Ingredient(name,parseInt(ammount)))
  }

}
