import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shoppingList.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToSL() {
    this.recipeService.selectedRecipe.ingredients.forEach(
      (ingredient: Ingredient) => {
        this.slService.addIngredient(ingredient);
      }
    );
  }
}
