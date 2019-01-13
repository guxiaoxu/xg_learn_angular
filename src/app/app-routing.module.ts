import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MessageDisplayComponent } from './message/message.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: MessageDisplayComponent, pathMatch: 'full', data: { msg: 'Please select a recipe!'} },
    { path: 'new', component: RecipeEditComponent},
    { path: ':index', component: RecipeDetailComponent },
    { path: ':index/edit', component: RecipeEditComponent},
  ] },
  { path: 'sl', component: ShoppingListComponent },
  { path: 'not-found', component: MessageDisplayComponent, data: { msg: 'Request resource not found!'} },
  { path: '**', redirectTo: 'not-found' }
];

export const AppRouteModule = RouterModule.forRoot(appRoutes);
