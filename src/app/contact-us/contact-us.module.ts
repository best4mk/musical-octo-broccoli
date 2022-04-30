import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent
  }
];

@NgModule({
  declarations: [
    ContactUsComponent,
    ContactUsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class ContactUsModule { }
