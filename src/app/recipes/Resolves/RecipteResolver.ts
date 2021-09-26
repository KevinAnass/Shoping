import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import{Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export  class RecipteResolver implements Resolve<Recipe>{

  constructor(private recipeService:RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipesByName(+route.params['id']);
  }
}
