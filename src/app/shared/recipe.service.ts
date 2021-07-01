import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg', [
      new Ingredient('meat', 4),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('A brand New Recipe', 'This is a test', 'https://scontent.ftpe3-2.fna.fbcdn.net/v/t31.18172-8/12493980_1685073668444811_3899773754661116169_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=Iip-pRYYRMMAX8paUac&_nc_ht=scontent.ftpe3-2.fna&oh=f431a907f33b51cbeaf1146bee6f2f27&oe=60E2EB59', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
