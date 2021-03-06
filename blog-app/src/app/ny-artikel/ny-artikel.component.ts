import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { ArtikelServiceService } from '../artikel-service.service';
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
    publishArticle() {
      this.ArtikelService.addArticle(this.model);
    }

  constructor(private  ArtikelService: ArtikelServiceService) { }

  ngOnInit(): void {
      this.model = new Form("","", "","");
      console.log(this.model.title)
  }



}
