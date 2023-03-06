import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Dessert } from 'src/app/model/dessert.model';
import { Drink } from 'src/app/model/drink.model';
import { FormControl, FormGroup, FormBuilder, Form } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Pizza } from 'src/app/model/pizza.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  constructor(private fb: FormBuilder, private modalService: BsModalService) {}
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
  modalRef?: BsModalRef;
  @ViewChild('grandTotalModal', { static: true })
  grandTotalModal!: TemplateRef<any>;
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
  get pizzaFormGroup() {
    return this.orderForm.get('pizzaGroup') as FormGroup;
  }
  grandTotal = 0;
  selectedPizza: Array<Pizza> = [];
  selectedDrink: Array<Drink> = [];

  get extractDessert() {
    return (this.orderForm.get('dessertGroup') as FormGroup).controls[
      'dessertArray'
    ].value;
    //let name = this.desserts.at(i).get('name')?.value;
  }
  get extractDrink() {
    return (this.orderForm.get('drinkGroup') as FormGroup).controls[
      'drinkArray'
    ].value;
  }
  get extractPizza() {
    return (this.orderForm.get('pizzaGroup') as FormGroup).controls[
      'pizzaArray'
    ].value;
  }
  finalSubmit() {
    this.calculateFinalGrandTotal();
    this.modalRef = this.modalService.show(this.grandTotalModal);
  }
  onModalClose(): void {
    this.modalRef?.hide();
  }
  onModalSubmit(): void {
    this.modalRef?.hide();
    alert('Order Successfully Submitted');
    window.location.reload();
    console.log('submitted');
  }
  drinkTotal = 0;
  dessertTotal = 0;
  pizzaTotal = 0;
  calculateFinalGrandTotal() {
    this.grandTotal = 0;
    this.grandTotal = this.drinkTotal + this.dessertTotal + this.pizzaTotal;
  }
  getSumFromDrink(data: number) {
    this.drinkTotal = 0;
    this.drinkTotal += data;
  }
  getSumFromDessert(data: number) {
    this.dessertTotal = 0;
    this.dessertTotal += data;
  }
  getSumFromPizza(data: number) {
    this.pizzaTotal = 0;
    this.pizzaTotal += data;
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
