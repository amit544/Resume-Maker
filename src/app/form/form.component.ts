import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormBuilder } from '@angular/forms';
import { Form } from './form.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }
  email = new FormControl('', [Validators.required, Validators.email]);
  fname=new FormControl('',Validators.required);
  mobileno=new FormControl('',Validators.required);
  getErrorMessage() {
    return this.email.hasError('required')?'You must enter a value' :
          this.email.hasError('email')?'Not a valid email' :
            '';
  }
  ErrorMessage() {
    return this.fname.hasError('required')?'You must enter a value' :
        this.fname.hasError('fname')?'Not a valid name' :
            '';
  }
  mobileMessage(){
    return this.mobileno.hasError('required')?'You must enter a value':
    this.mobileno.hasError('number')?'Not a valid Number':
    '';
  }
  myControl = new FormControl();
  options: string[] = ['C.B.S.E', 'U.P.Board', 'ICSC','NIOS'];
  standerds:string[]=['10th','12th','B.tech','B.sc','B.A.','B.COM','M.sc','M.COM'];
  amit(){
    // Forms:Form[]=[ new('amit',)];

  }
  ngOnInit() {
  }

}
