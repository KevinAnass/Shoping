import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  Recipe: Recipe = {id: 0, name: 'null', imagePath: 'null', description: 'null', ingredients: []};
  isEdit: boolean;
  status: string;

  constructor(private router: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((para: Params) => {
      this.isEdit = para['id'] != null;
      this.status = this.isEdit ? 'Update' : 'New';
      if (this.isEdit) {
        this.Recipe = this.recipeService.getRecipesByName(+para['id']);
      }
    })
  }

  onConfirm() {
    if (this.isEdit) {
      this.recipeService.onUpdate(this.Recipe);
    } else {
      this.recipeService.onNew(this.Recipe);
    }

  }

}
