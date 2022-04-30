import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {
  contactForm: FormGroup = new FormGroup({
    'firstName': new FormControl("", [ Validators.required ]),
    'lastName': new FormControl("", [ Validators.required ]),
    'email': new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    'question': new FormControl("", [ Validators.required ])
  });

  public isRequired(formControlName: string): boolean {
    return this.contactForm.controls[ formControlName ]?.touched 
      && this.contactForm.controls[formControlName]?.errors?.['required'];
  }

  public isEmailMatchPattern(): boolean {    
    return this.contactForm.controls['email']?.touched 
      && this.contactForm.controls['email']?.errors?.['pattern'];
  }

  onSubmit(): void {
    console.log(this.contactForm);

    if (this.contactForm.valid) {
      console.log(this.contactForm);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
