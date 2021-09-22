import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("name one", "just a lorem text with out any meaing", "https://picsum.photos/200/300"),
    new Recipe("name two", "just a lorem text with out any meaing", "https://picsum.photos/200/300"),
    new Recipe("name three", "just a lorem text with out any meaing", "https://picsum.photos/200/300")
  ];
  @Output('RecipeListChecked')RecipeListChecked=new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
