import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  modalRef?: BsModalRef;

  @ViewChild('manageCustomer', { static: false })
  manageCustomerModal!: TemplateRef<any>;
  getValue: any;
  constructor(private modalService: BsModalService) {}

  onSubmit(form: any): void {
    console.log(form);
  }
  clear() {
    window.alert(
      'Thank you for signing up! You have successfully joined our community!'
    );
    this.getValue = document.getElementById('firstName');
    if (this.getValue.value != '') {
      this.getValue.value = '';
    }
    this.getValue = document.getElementById('lastName');
    if (this.getValue.value != '') {
      this.getValue.value = '';
    }
    this.getValue = document.getElementById('phone');
    if (this.getValue.value != '') {
      this.getValue.value = '';
    }
    this.getValue = document.getElementById('birthday');
    if (this.getValue.value != '') {
      this.getValue.value = '';
    }
    this.getValue = document.getElementById('email');
    if (this.getValue.value != '') {
      this.getValue.value = '';
    }
  }
}
