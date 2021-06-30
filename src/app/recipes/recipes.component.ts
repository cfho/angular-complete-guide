import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe$!: Observable<Recipe>;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.selectedRecipe$ = this.recipeService.selectedRecipe
    }
  

}
