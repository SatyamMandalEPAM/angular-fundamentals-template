import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;
  isValidEmailField: boolean = false;
  isValidPasswordField: boolean = false;

  onSubmit(formValue: any) {
    console.log(formValue.email);
  }
}
