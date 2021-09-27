import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  Recipe: Recipe = {id: 0, name: 'null', imagePath: 'null', description: 'null', ingredients: []};
  formGroup: FormGroup;
  ingredientsarray: FormArray = new FormArray([]);
  isEdit: boolean;
  status: string;

  constructor(private router: ActivatedRoute,
              private recipeService: RecipeService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((para: Params) => {
      this.onInitForm(para);
    });
  }

  onConfirm() {
    if (this.isEdit) {
      this.recipeService.onUpdate(this.Recipe);
    } else {
      this.recipeService.onNew(this.Recipe);
    }
  }

  NewIngredient() {
    (<FormArray>this.formGroup.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onSubmit() {
    if (this.isEdit)
      this.recipeService.onUpdate(this.Recipe);
    else
      this.recipeService.onNew(this.Recipe);
    this.onCancel();
  }

  onCancel(){
    this.route.navigate(['recipes']);
  }

  deleteIngredient(id: number) {
    (<FormArray>this.formGroup.get('ingredients')).removeAt(id);
  }

  onInitForm(para: Params) {
    this.isEdit = para['id'] != null;
    this.status = this.isEdit ? 'Update' : 'New';
    if (this.isEdit) {
      this.Recipe = this.recipeService.getRecipesByName(+para['id']);
      for (let item of this.Recipe.ingredients) {
        this.ingredientsarray.push(
          new FormGroup({
            'name': new FormControl(item.name, Validators.required),
            'amount': new FormControl(item.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        )
      }
    }

    this.formGroup = new FormGroup({
      'name': new FormControl(this.Recipe.name, Validators.required),
      'imagePath': new FormControl(this.Recipe.imagePath, Validators.required),
      'description': new FormControl(this.Recipe.description, Validators.required),
      'ingredients': this.ingredientsarray
    });
  }

  GetIngredients() {
    return (<FormArray>this.formGroup.get('ingredients')).controls;
  }

}
