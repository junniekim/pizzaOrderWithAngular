import { Component } from '@angular/core';
import { Dessert } from 'src/app/model/dessert.model';
import { Drink } from 'src/app/model/drink.model';
import { Pizza } from 'src/app/model/pizza.model';
import { FormControl, FormGroup, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  constructor(private fb: FormBuilder) {}
  orderForm = this.fb.group({
    drinkGroup: this.fb.group({
      drinkArray: this.fb.array([]),
    }),
    dessertGroup: this.fb.group({
      dessertArray: this.fb.array([]),
    }),
    pizzaGroup: this.fb.group({
      pizzaArray: this.fb.array([]),
    }),
  });

  drink: Array<Drink> = [
    { id: 1, name: 'Coke', largePrice: 1.99, smallPrice: 1 },
    { id: 2, name: 'Sprite', largePrice: 2.99, smallPrice: 1 },
    { id: 3, name: 'Lemonade', largePrice: 3.99, smallPrice: 1 },
    { id: 4, name: 'Fanta', largePrice: 4.99, smallPrice: 1 },
    { id: 5, name: 'Pepsi', largePrice: 5.99, smallPrice: 1 },
  ];
  get dessertFormGroup() {
    return this.orderForm.get('dessertGroup') as FormGroup;
  }
  get drinkFormGroup() {
    return this.orderForm.get('drinkGroup') as FormGroup;
  }
  test() {
    console.log(this.orderForm);
  }

  dessert: Array<Dessert> = [
    {
      price: 6,
      id: 1,
      name: 'Apple Pie',
      allergy: ['Apple', 'Flour'],
    },
    {
      price: 2,
      id: 2,
      name: 'Unusually Big Lollipop',
      allergy: ['Sugar'],
    },
    {
      price: 6.99,
      id: 3,
      name: 'Chocolate cake',
      allergy: ['Apple', 'Flour'],
    },
    {
      price: 6.99,
      id: 4,
      name: 'Cheesecake',
      allergy: ['Cheese', 'Gluten '],
    },
    {
      price: 3.5,
      id: 5,
      name: 'Icecream',
      allergy: ['Dairy', 'Sugar'],
    },
    {
      price: 1,
      id: 6,
      name: 'Cookie',
      allergy: ['Sugar'],
    },
  ];
}
