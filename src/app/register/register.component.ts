import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'cpassword': ['', Validators.required]
    });
  }

  register() {
    console.log("AAAAAAAAA", this.form);
  }
  
  get fname() {
    return this.form.get('fname');
  }

  get lname() {
    return this.form.get('lname');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get cpassword() {
    return this.form.get('cpassword');
  }
}
