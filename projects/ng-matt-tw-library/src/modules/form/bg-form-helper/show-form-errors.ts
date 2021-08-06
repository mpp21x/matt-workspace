import {FormGroup} from '@angular/forms';

export function showFormErrors(form: FormGroup) {
  const invalid = [];
  const controls = form.controls;
  for (const name in controls) {
    if (controls[name].invalid) {
      invalid.push({
        name,
        errors: controls[name].errors
      });
    }
  }
  return invalid;
}
