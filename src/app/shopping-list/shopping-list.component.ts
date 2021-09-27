import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../Shared/ingredient.model";
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngeredients();
    this.shoppingService.IngredientAdded.subscribe((is: Ingredient[]) => {
      this.ingredients = is;
      console.log(is);
    });
  }

  onEditItem(id:number){
    this.shoppingService.startEditing.next(id);
  }

}
