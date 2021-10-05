import {AbstractControl} from "@angular/forms";

export function urlValidator(control: AbstractControl) {
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!control.value.match(regex) || /\/$/.test(control.value) || /http:\/\//.test(control.value) || /https:\/\//.test(control.value)) {
    return {invalidUrl: {value: control.value}};
  } else {
    return null;
  }
}
