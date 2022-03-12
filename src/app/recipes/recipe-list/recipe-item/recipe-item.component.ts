import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor(
    // private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    // console.log(this.recipe)
    // console.log(this.index)
    // this.recipes = this.recipeService.getRecipes();
  }

  // onSelect(recipe: Recipe) {
  //   this.recipeService.selectedRecipe.emit(recipe);
  // }

}
