import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Drink } from 'src/app/model/drink.model';

@Component({
  selector: 'app-drink-form-array',
  templateUrl: './drink-form-array.component.html',
  styleUrls: ['./drink-form-array.component.css'],
})
export class DrinkFormArrayComponent implements OnInit {
  @Input() drinkList: Array<Drink> = [];
  @Input() drinkGroup!: FormGroup;
  drinkSize: Array<string> = ['Small', 'Large'];
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get drinks() {
    return this.drinkGroup.controls['drinkArray'] as FormArray;
  }
  sum: number = 0;
  addDrink() {
    if (!this.drinks.valid) {
      return;
    }

    const drinkForm = this.fb.group({
      //form controls
      size: ['', Validators.required],
      name: ['', Validators.required],
    });
    this.drinks.push(drinkForm);
    this.getSum();
  }
  getSum() {
    this.sum = 0;
    for (let i = 0; i < this.drinks.length; i++) {
      let size = this.drinks.at(i).get('size')?.value;
      let name = this.drinks.at(i).get('name')?.value;
      //go through all entries.
      // size is large, drink specified
      if (size == 'Large' && name != '') {
        this.sum +=
          this.drinkList.find(
            (x) => x.id == this.drinks.at(i).get('name')?.value
          )?.largePrice ?? 0;
      }
      //size is small, drink not specified
      else if (size == 'Small' && name != '') {
        this.sum +=
          this.drinkList.find(
            (x) => x.id == this.drinks.at(i).get('name')?.value
          )?.smallPrice ?? 0;
      }
    }
  }
  deleteDrink(lessonIndex: number) {
    this.drinks.removeAt(lessonIndex);
    this.getSum();
  }
}
