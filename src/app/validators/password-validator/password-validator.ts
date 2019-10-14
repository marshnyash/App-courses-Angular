import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailRegex = /^[A-Za-z0-9]+$/;
    if (emailRegex.test(control.value) || !control.value) {
      return null;
    }
    return {
      custom: `Invalid password`
    };
  };
}
