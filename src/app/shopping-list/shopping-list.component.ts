import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[];

  constructor(
    private shoppingList: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.changeIngredients$
    .subscribe((ingredients: Ingredient[])=> {
      this.ingredients = ingredients;
    })
  }
}
