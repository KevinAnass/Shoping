import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from "../../Shared/ingredient.model";
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
  }

  onNew(name: string, ammount: string) {
    this.shoppingService.NewOne(new Ingredient(name,parseInt(ammount)))
  }

}
