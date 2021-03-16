import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import {ConfirmPasswordValidator} from 'src/app/CustomValidator/custom-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  forms!: FormGroup;
  userList: User[]=[];


  addUser(){
    this.userList.push(this.forms.value);
  }

   constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forms = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)] ],
      email: ['', [Validators.required, Validators.email] ],
      password: ['',[Validators.required, Validators.minLength(4)] ],
      confirmPassword: ['', Validators.required]
    }, {
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    })
  }

}
