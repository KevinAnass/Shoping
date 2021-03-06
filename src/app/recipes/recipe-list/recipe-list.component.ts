import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService:RecipeService) {
  }

  ngOnInit(): void {
    console.log('datarecive');
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.SelectedRecipe.subscribe((data: Recipe[]) => {this.recipes = data;
    console.log('datarecive')});
  }

}
