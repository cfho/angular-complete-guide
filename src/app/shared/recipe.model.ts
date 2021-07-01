import { Ingredient } from "./ingredient.model";

export class Recipe {
    public description: string;
    public name: string;
    public imagePath: string;
    public ingredients!: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
        this.description = desc;
        this.name = name;
        this.imagePath = imagePath;
        this.ingredients = ingredients
    }
}