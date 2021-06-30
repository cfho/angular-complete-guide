import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe!: Recipe;

  // recipe$!: Observable<Recipe>;
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    // this.recipe$ = this.recipeService.selectedRecipe
  }

}
