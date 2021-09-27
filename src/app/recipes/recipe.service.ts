import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../Shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[];
  SelectedRecipe = new Subject<Recipe[]>();

  constructor() {
    this.recipes = [
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
  }

  getRecipes() {
    return this.recipes.slice();

  }

  getRecipesByName(id: number) {
    console.log("start fetshing the data");
    console.log(id);
    console.log(this.recipes.length);
    console.log(this.recipes.find(x => x.id == id));
    return this.ensure(this.recipes.find(x => x.id == id));
  }

  onNew(recipe: Recipe) {
    recipe.id = this.recipes[this.recipes.length - 1].id + 1;
    this.recipes.push(recipe);
    this.SelectedRecipe.next(this.getRecipes());
    console.log(this.recipes.length);
  }

  onDelete(id: number) {
    this.recipes.splice(id, 1);
    console.log('id is' + id + ' after delete count is ' + this.recipes.length);
    this.SelectedRecipe.next(this.getRecipes());
  }

  onUpdate(recipe: Recipe) {
    let updateItem = this.getRecipesByName(recipe.id);

    let index = this.recipes.indexOf(updateItem);

    this.recipes[index] = recipe;
    this.SelectedRecipe.next(this.getRecipes());
    console.log(this.recipes.length);
  }

  ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }

    return argument;
  }
}
