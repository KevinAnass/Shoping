import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../Shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, "name one",
      "just a lorem text with out any meaing",
      "https://picsum.photos/200/300",
      [new Ingredient("test1", 1111),
        new Ingredient("test2", 222),
        new Ingredient("test2", 222)]),

    new Recipe(2, "name two",
      "just a lorem text with out any meaing",
      "https://picsum.photos/200/300",
      [new Ingredient("test1", 1111),
        new Ingredient("test2", 222),
        new Ingredient("test2", 222)]),

    new Recipe(3, "name three",
      "just a lorem text with out any meaing",
      "https://picsum.photos/200/300",
      [new Ingredient("test1", 1111),
        new Ingredient("test2", 222),
        new Ingredient("test2", 222)])
  ];
  SelectedRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipesByName(id: number) {
    return this.ensure(this.recipes.find(x => x.id == id));
  }

  onNew(recipe: Recipe) {
    recipe.id = this.recipes[this.recipes.length - 1].id + 1;
    this.recipes.push(recipe);
    console.log('done');
  }


  onUpdate(recipe: Recipe) {
    let updateItem = this.getRecipesByName(recipe.id);

    let index = this.recipes.indexOf(updateItem);

    this.recipes[index] = recipe;
    console.log('done');
  }

  ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }

    return argument;
  }
}
