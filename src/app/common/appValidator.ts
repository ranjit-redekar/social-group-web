import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AppValidator{
    cannotContainSpace(abControl: AbstractControl): ValidationErrors | null{
        if((abControl.value as string).indexOf(' ') >=0) {
            return { cannotContainSpace: true};
        }
        return null;
    }
}
