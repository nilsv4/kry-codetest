import {AbstractControl} from "@angular/forms";

export function urlValidator(control: AbstractControl) {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);

  if (!control.value.match(regex)) {
    return {invalidUrl: {value: control.value}};
  } else {
    return null;
  }
}
