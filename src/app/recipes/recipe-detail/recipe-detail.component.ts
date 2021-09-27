import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingService} from "../../shopping-list/shopping.service";
import {Ingredient} from "../../Shared/ingredient.model";
import {ActivatedRoute, Data, Router, RouterLinkActive} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('DetailRecipe') DetailRecipe: Recipe;
  isOpen = "btn-group";
  Open = false;

  constructor(private element: ElementRef,
              private rendrer: Renderer2,
              private ShoppingServices: ShoppingService,
              private router: ActivatedRoute,
              private route:Router,
              private recipeService:RecipeService) {
  }

  ngOnInit(): void {
    this.router.data.subscribe((data: Data) => {
      this.DetailRecipe = data['recipte'];
    });
  }

  onDelete(){
    this.recipeService.onDelete(this.DetailRecipe.id);
    this.route.navigate(['recipes']);
  }

  setShoppongList(ingredients: Ingredient[]) {
    this.ShoppingServices.setIngredients(ingredients);
  }

  onClickDialog() {
    if (this.isOpen === "btn-group") {
      this.isOpen = "btn-group open"
      this.Open = true;
    } else {
      this.isOpen = "btn-group"
      this.Open = false;
    }
  }
}
