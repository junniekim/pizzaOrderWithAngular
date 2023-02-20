import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPhone]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true },
  ],
})
export class PhoneDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value.trim().length == 0) {
      return { invalidPhone: true };
    }
    return this.phoneValidator(control.value);
  }
  phoneValidator(s: string) {
    const r: RegExp =
      /^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (r.test(s)) {
      return null;
    } else {
      return { invalidPhone: true };
    }
  }
}
