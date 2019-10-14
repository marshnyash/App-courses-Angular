import { AbstractControl, ValidatorFn } from '@angular/forms';

export function loginValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailRegex = /^[a-zA-Z]+$/;
    if (emailRegex.test(control.value) || !control.value) {
      return null;
    }
    return {
      custom: `Invalid login`
    };
  };
}
