import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe!: Recipe;

  // recipe$!: Observable<Recipe>;
  constructor(
    private recipeService: RecipeService,
    private slServerice: ShoppingListService
  ) { }

  ngOnInit(): void {
    // this.recipe$ = this.recipeService.selectedRecipe
  }

  addShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      console.log(ingredient);
      this.slServerice.addIngredients(ingredient);
    })
  }

}
