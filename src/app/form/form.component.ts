import { Component, OnInit } from '@angular/core';
import { Validators, FormControl,FormBuilder } from '@angular/forms';
import { Form } from './form.model';
import { DataService } from '../data.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {NgForm} from '@angular/forms'

export interface otherskill{
  name2:String;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  name='';
  mname='';
  lname='';
  mobile=" ";
  emailid='';
  linkedin='';
  Country='';
  University='';
  standard='';
  percentage='';
  yearofpassing='';
  University1='';
  standard1='';
  percentage1='';
  yearofpassing1='';
  University2='';
  standard2='';
  percentage2='';
  yearofpassing2='';
  Certificate='';
  yearofcertificate='';
  Certificate1='';
  yearofcertificate1='';
  hobbies1='';
  hobbies2='';
  hobbies3='';
  Company1='';
  Post1='';
  Description1='';
  Company2='';
  Post2='';
  Description2='';
  constructor(private data:DataService) { }
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
  options: string[] = ['C.B.S.E', 'U.P.Board', 'ICSC','NIOS','A.K.T.U','M.M.M','H.B.T.U','BHU'];
  standerds:string[]=['10th','12th','B.tech','B.sc','B.A.','B.COM','M.sc','M.COM'];
  amit(){
    // Forms:Form[]=[ new('amit',)];

  }
  ngOnInit() {
  }
  savedata(){
    console.log('Savedata called')
    console.log(this.name,this.mname)
    console.log(this.fruits)
    let obj={
      "name":this.name,
      "mname":this.mname,
      "lname":this.lname,
      "emailid":this.emailid,
      "mobile":this.mobile,
      "linkedin":this.linkedin,
      "Country":this.Country,
      "University":this.University,
      "technicalskill":this.fruits,
      "standard":this.standard,
      "percentage":this.percentage,
      "yearofpassing":this.yearofpassing,
      "University1":this.University1,
      "standard1":this.standard1,
      "percentage1":this.percentage1,
      "yearofpassing1":this.yearofpassing1,
      "University2":this.University2,
      "standard2":this.standard2,
      "percentage2":this.percentage2,
      "yearofpassing2":this.yearofpassing2,
      "Certificate":this.Certificate,
      "yearofcertificate":this.yearofcertificate,
      "Certificate1":this.Certificate1,
      "yearofcertificate1":this.yearofcertificate1,
      "hobbies1":this.hobbies1,
      "hobbies2":this.hobbies2,
      "hobbies3":this.hobbies3,
      "Company1":this.Company1,
       "Post1":this.Post1,
       "Description1":this.Description1,
       "Company2":this.Company2,
       "Post2":this.Post2,
       "Description2":this.Description2,


    }
    this.data.data.push(obj)
    console.log(obj)

  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits= [
    
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);
    

    if (index >= 0){
      this.fruits.splice(index, 1);
    }
  }

}
