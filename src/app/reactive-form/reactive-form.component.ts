import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  password1 = '';
  password2 = '';

  constructor(private fb: FormBuilder) {}

  //confirmPsw = (formC = FormControl) => {
  // if (this.password1 !== this.password2) {
  //  return {'Le password non coincidono': true};
  // } else {
  //   return null;
  // }
  //}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control(null),
      surname: this.fb.control(null),
      username: this.fb.control(null),
      password1: this.fb.control(null, [Validators.required]),
      password2: this.fb.control(null, [Validators.required]),
      genere: this.fb.control(null),
      profileImg: this.fb.control(null),
      bio: this.fb.control(null),
    });
  }

  submit() {
    console.log(this.form);
    console.log('Form correttamente inviato');
    this.form.reset();
  }
}
