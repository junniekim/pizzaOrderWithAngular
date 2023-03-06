import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/model/pizza.model';

@Component({
  selector: 'app-pizza-form-array',
  templateUrl: './pizza-form-array.component.html',
  styleUrls: ['./pizza-form-array.component.css'],
})
export class PizzaFormArrayComponent {
  @Input() pizzaGroup!: FormGroup;
  @Output() dataEvent = new EventEmitter<number>();
  pizzaSauce: Array<string> = ['Traditional Tomato', 'Barbeque', 'Ranch'];
  pizzaTopping: Array<string> = ['Peperonni', 'Sausage', 'Chicken', 'Cheese'];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get pizzas() {
    return this.pizzaGroup.controls['pizzaArray'] as FormArray;
  }
  sum: number = 0;
  addPizza() {
    if (!this.pizzas.valid) {
      return;
    }

    const pizzaForm = this.fb.group({
      //form controls
      pizzaTopping: ['', Validators.required],
      pizzaSauce: ['', Validators.required],
      largeIt: [false],
    });
    this.pizzas.push(pizzaForm);
    this.getSum();
  }
  getSum() {
    this.sum = 0;
    for (let i = 0; i < this.pizzas.length; i++) {
      let large = this.pizzas.at(i).get('largeIt')?.value;
      let top = this.pizzas.at(i).get('pizzaTopping')?.value;
      let sauce = this.pizzas.at(i).get('pizzaSauce')?.value;
      // not large
      if (large == false && top != '' && sauce != '') {
        this.sum += 10;
      } else if (large == true) {
        this.sum += 15;
      }
    }
    this.dataEvent.emit(this.sum);
  }

  deletePizza(lessonIndex: number) {
    this.pizzas.removeAt(lessonIndex);
    this.getSum();
  }
}
