import { Ingredient } from 'src/app/shared/ingredient.model';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe1',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('apple', 5),
        new Ingredient('orange', 1)
      ]
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('apple', 10),
        new Ingredient('orange', 12),
        new Ingredient('beer', 1)
      ]
    ),
  ];

  selectedRecipe: Recipe = null;

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
