import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../Shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 7)
  ];
  IngredientAdded = new Subject<Ingredient[]>();
  startEditing = new Subject<number>()

  constructor() {
  }

  getIngeredients() {
    return this.ingredients.slice();
  }

  getItem(id:number){
    return this.ingredients[id];
  }

  onEdit(id:number,ingredient:Ingredient){
    this.ingredients[id]=ingredient;
    console.log(this.ingredients);
    this.IngredientAdded.next(this.getIngeredients());
  }

  onDelete(id:number){
    this.ingredients.splice(id,1);
    this.IngredientAdded.next(this.getIngeredients());
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.IngredientAdded.next(this.getIngeredients());
  }

  NewOne(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngredientAdded.next(this.getIngeredients());
  }
}
