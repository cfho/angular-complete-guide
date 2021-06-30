import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(recipe: Recipe) {
    // this.recipeEvent.emit(recipe);
  }

}
