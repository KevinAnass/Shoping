import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingService} from "../shopping.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Ingredient} from "../../Shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') FormIngredient: NgForm;
  subscribtion: Subscription;
  EditingMode: boolean;
  EditingItemIndex: number;
  ingredient: Ingredient;

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    this.subscribtion = this.shoppingService.startEditing.subscribe((id: number) => {
      this.EditingMode = true;
      this.EditingItemIndex = id;
      this.ingredient = this.shoppingService.getItem(id);
      this.FormIngredient.setValue({
        'name': this.ingredient.name,
        'ammount': this.ingredient.amount
      });
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  onNew(form: NgForm) {
    if (!this.EditingMode) {
      this.shoppingService.NewOne(new Ingredient(form.value.name, parseInt(form.value.ammount)))
    } else {
      this.ingredient.name = this.FormIngredient.value.name;
      this.ingredient.amount = this.FormIngredient.value.ammount;
      this.shoppingService.onEdit(this.EditingItemIndex, this.ingredient);
    }
    this.onReset();
  }

  onDelete(){
    this.shoppingService.onDelete(this.EditingItemIndex);
    this.onReset();
  }

  onReset() {
    this.EditingMode = false;
    this.FormIngredient.reset();
  }

}
