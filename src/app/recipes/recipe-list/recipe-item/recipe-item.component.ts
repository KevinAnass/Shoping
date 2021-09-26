import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;

  constructor(private recipeSelector: RecipeService, private route: Router, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onRecipteClick() {
    // this.route.navigate([this.recipe.id], {relativeTo: this.router});
  }


}
