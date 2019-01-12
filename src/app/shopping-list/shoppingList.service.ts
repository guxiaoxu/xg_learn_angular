import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientEventEmitter = new EventEmitter<Ingredient[]>();
  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange();
  }

  removeIngredient(ingredientName: string) {
    this.ingredients = this.ingredients.filter((ele) => ele.name !== ingredientName);
    this.ingredientChange();
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientChange() {
    this.ingredientEventEmitter.emit(this.getIngredients());
  }

}
