import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dessert } from 'src/app/model/dessert.model';

@Component({
  selector: 'app-dessert-form-array',
  templateUrl: './dessert-form-array.component.html',
  styleUrls: ['./dessert-form-array.component.css'],
})
export class DessertFormArrayComponent implements OnInit {
  @Input() dessertList: Array<Dessert> = [];
  @Input() dessertGroup!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}
  get desserts() {
    return this.dessertGroup.controls['dessertArray'] as FormArray;
  }
  sum: number = 0;
  addDessert() {
    if (!this.desserts.valid) {
      return;
    }
    const dessertForm = this.fb.group({
      //form controls

      name: ['', Validators.required],
    });
    this.desserts.push(dessertForm);
    this.getSum();
  }
  getSum() {
    this.sum = 0;
    for (let i = 0; i < this.desserts.length; i++) {
      let name = this.desserts.at(i).get('name')?.value;
      if (name != '') {
        this.sum +=
          this.dessertList.find(
            (x) => x.id == this.desserts.at(i).get('name')?.value
          )?.price ?? 0;
      }
    }
  }
  deleteDessert(lessonIndex: number) {
    this.desserts.removeAt(lessonIndex);
    this.getSum();
  }
}
