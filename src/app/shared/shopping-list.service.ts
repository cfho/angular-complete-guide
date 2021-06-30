import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',5)
  ];

  changeIngredients$ = new EventEmitter<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.changeIngredients$.emit(this.ingredients.slice());
  }
}
