import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../Shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("name one",
      "just a lorem text with out any meaing",
      "https://picsum.photos/200/300",
      [new Ingredient("test1",1111),
        new Ingredient("test2",222),
        new Ingredient("test2",222)]),

    new Recipe("name two",
      "just a lorem text with out any meaing",
      "https://picsum.photos/200/300",
      [new Ingredient("test1",1111),
        new Ingredient("test2",222),
        new Ingredient("test2",222)]),

    new Recipe("name three",
      "just a lorem text with out any meaing",
      "https://picsum.photos/200/300",
      [new Ingredient("test1",1111),
        new Ingredient("test2",222),
        new Ingredient("test2",222)])
  ];
  SelectedRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }
}
