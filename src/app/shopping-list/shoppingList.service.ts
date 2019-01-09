import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredientName: string) {
    this.ingredients = this.ingredients.filter((ele) => ele.name !== ingredientName);
  }

}
