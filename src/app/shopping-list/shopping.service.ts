import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../Shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 7)
  ];
  IngredientAdded = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  getIngeredients() {
    return this.ingredients.slice();
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.IngredientAdded.emit(this.getIngeredients());
  }

  NewOne(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientAdded.emit(this.getIngeredients());
  }

}
