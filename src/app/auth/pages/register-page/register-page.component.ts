import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidators from '../../../shared/validators/validator';

@Component({
  standalone: false,

  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(customValidators.firstNameAndLastnamePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(customValidators.emailPattern),
        ],
      ],
      username: ['', [Validators.required, customValidators.cantBeStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    });
  }
  isValidField(field: string): boolean | null {
    const validatedField = this.myForm.controls[field];
    return validatedField.errors && validatedField.touched;
  }
  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
