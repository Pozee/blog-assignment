import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
@Component({
  selector: 'app-ny-artikel',
  templateUrl: './ny-artikel.component.html',
  styleUrls: ['./ny-artikel.component.css']
})
export class NyArtikelComponent implements OnInit {
    model: Form;
    test(){
      console.log(this.model)
    }


  constructor() { }

  ngOnInit(): void {
      this.model = new Form("Mannen bakom corona utbrottet talar ut","Elon Musk Elon Musk", 20,"Pontus 'Z' Zetterberg");
      console.log(this.model.title)
  }



}
