import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const message = "Your password isn't strong enough: ";
const upperLower = [/[a-z]/, /[A-Z]/];
const alphaNum = [/[a-zA-Z]/, /[0-9]/];
const special = [/[^\w\s']/];

export default function passwordValidator(): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    if (control.value && control.value.length < 8) {
      return { passwordStrong: `${message}at least 8 characters` };
    }

    if (
      control.value &&
      !upperLower.every((pattern) => pattern.test(control.value))
    ) {
      return {
        passwordStrong: `${message}a mixture of both uppercase and lowercase letters`,
      };
    }

    if (
      control.value &&
      !alphaNum.every((pattern) => pattern.test(control.value))
    ) {
      return { passwordStrong: `${message}a mixture of letters and numbers` };
    }

    if (
      control.value &&
      !special.every((pattern) => pattern.test(control.value))
    ) {
      return {
        passwordStrong: `${message}inclusion of at least one special character, e.g., ! @ # ? ]`,
      };
    }

    return null;
  };
}
