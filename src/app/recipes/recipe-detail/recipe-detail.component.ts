import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingService} from "../../shopping-list/shopping.service";
import {Ingredient} from "../../Shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('DetailRecipe') DetailRecipe: Recipe;
  isOpen = "btn-group";
  Open=false;

  constructor(private element: ElementRef, private rendrer: Renderer2,private ShoppingServices:ShoppingService) {
  }

  ngOnInit(): void {
  }

  setShoppongList(ingredients:Ingredient[]){
    this.ShoppingServices.setIngredients(ingredients);
  }

  onClickDialog() {
    if (this.isOpen==="btn-group") {
      this.isOpen = "btn-group open"
      this.Open=true;
    }
    else{
      this.isOpen="btn-group"
      this.Open=false;
    }
  }
}
