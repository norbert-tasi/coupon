import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static required(control: FormControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

}
