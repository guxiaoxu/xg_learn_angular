
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: ':name', component: RecipeDetailComponent }
  ] },
  { path: 'sl', component: ShoppingListComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const AppRouteModule = RouterModule.forRoot(appRoutes);
