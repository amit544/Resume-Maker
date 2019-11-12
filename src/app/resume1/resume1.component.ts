import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-resume1',
  templateUrl: './resume1.component.html',
  styleUrls: ['./resume1.component.scss']
})
export class Resume1Component implements OnInit {
skills=""
hobbies=""
  constructor(private data:DataService) { }
  printfun(){
    window.print()
  }

  ngOnInit() {
    
    this.data.data[0].technicalskill.forEach(element => {
      this.skills=this.skills+','+element}, 
      );
    console.log(this.skills)
  }

}
