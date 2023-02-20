import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailDirective, multi: true },
  ],
})
export class EmailDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value.trim().length == 0) {
      return { invalidEmail: true };
    }
    return this.emailValidator(control.value);
  }
  emailValidator(s: string) {
    const r: RegExp = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){3,}@g(oogle)?mail\.com$/;
    if (r.test(s)) {
      return null;
    } else {
      return { invalidEmail: true };
    }
  }
}
