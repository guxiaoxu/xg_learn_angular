import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shoppingList.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('inside rd');
    this.recipe = this.recipeService.getRecipeByName(this.route.snapshot.params['name']);
    this.route.params.subscribe(
      (params) => {
        console.log('inside rds');
        this.recipe = this.recipeService.getRecipeByName(params['name']);
      }
    );
  }

  onAddToSL() {
    this.recipe.ingredients.forEach(
      (ingredient: Ingredient) => {
        this.slService.addIngredient(ingredient);
      }
    );
  }
}
