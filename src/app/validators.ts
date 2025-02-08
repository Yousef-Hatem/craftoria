import { FormGroup } from '@angular/forms';

export function passwordMatchValidator(form: FormGroup) {
  const password = form.get('password');
  const passwordConfirm = form.get('passwordConfirm');

  if (password && passwordConfirm) {
    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setErrors({ passwordMismatch: true });
    } else {
      passwordConfirm.setErrors(null);
    }
  }
}
