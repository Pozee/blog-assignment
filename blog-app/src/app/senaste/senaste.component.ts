import { Component, OnInit } from '@angular/core';
import { ArtikelServiceService } from '../artikel-service.service';

@Component({
  selector: 'app-senaste',
  templateUrl: './senaste.component.html',
  styleUrls: ['./senaste.component.css']
})
export class SenasteComponent implements OnInit {

  constructor(private  ArtikelService: ArtikelServiceService) { }
  articles:any = [{}];
  ngOnInit(): void {
    this.articles = this.ArtikelService.showLatestFive();
  }

}
