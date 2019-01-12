import { ShoppingListService } from './shoppingList.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  igdSubscription: any;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igdSubscription = this.slService.ingredientEventEmitter.subscribe(
      (igdArray: Ingredient[]) => {
        this.ingredients = igdArray;
      }
    );
  }

  ngOnDestroy() {
    this.igdSubscription.unsubscribe();
  }

}
