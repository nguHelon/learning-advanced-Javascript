import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomPasswordValidators {

    static validOldPassword(controls: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            if (controls.value !== '1234') {
                resolve({ validOldPassword: true })
            } else {
                resolve(null)
            }
        })
    }

    static newPasswordShouldMatch(controls: AbstractControl): ValidationErrors | null {
        const newPassword = controls.get('newPassword');
        const confirmPassword = controls.get('confirmPassword');

        if (confirmPassword?.value !== newPassword?.value) {
            return { newPasswordShouldMatch: true }
        } else {
            return null;
        }
    }

}