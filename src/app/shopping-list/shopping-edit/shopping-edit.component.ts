import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput", {static:true}) ingName!: ElementRef;
  @ViewChild("amountInput", {static:true}) ingAmount!: ElementRef;
  @Output() ingredientEvent = new EventEmitter<Ingredient>();
  constructor() { }



  ngOnInit(): void {
  }

  onAdd() {
    const name = this.ingName.nativeElement.value;
    const amount = this.ingAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientEvent.emit(newIngredient);
  }

}  
