import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shoppingList.service';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private slService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipeByName(params['name']);
        if (!this.recipe) {
          this.router.navigate(['not-found']);
        }
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
