import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  hide = true;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this._fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  signin() {
    this.signinForm.setErrors({
      invalidLogin: true
    });
  }

  get username() {
    return this.signinForm.get('username');
  }
}
