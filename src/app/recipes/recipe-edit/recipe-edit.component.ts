import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  routeSubscription: any;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.editMode = params['index'] != null;
        if (this.editMode) {
          this.recipe = this.recipeService.getRecipeByIndex(+params['index']);
          if (!this.recipe) {
          this.router.navigate(['not-found']);
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
