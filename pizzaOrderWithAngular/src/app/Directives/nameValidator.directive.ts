import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NameDirective, multi: true },
  ],
})
export class NameDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value.trim().length == 0) {
      return { invalidName: true };
    }
    return this.nameValidator(control.value);
  }
  nameValidator(s: string) {
    const r: RegExp = /^[a-z ,.'-]+$/;
    if (r.test(s)) {
      return null;
    } else {
      return { invalidName: true };
    }
  }
}
