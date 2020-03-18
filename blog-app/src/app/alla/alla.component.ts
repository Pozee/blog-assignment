import { Component, OnInit } from '@angular/core';
import { ArtikelServiceService } from '../artikel-service.service';
@Component({
  selector: 'app-alla',
  templateUrl: './alla.component.html',
  styleUrls: ['./alla.component.css']
})
export class AllaComponent implements OnInit {
  titles: any = [{}];
  constructor(private ArtikelService: ArtikelServiceService) { }

  ngOnInit(): void {
    this.titles = this.ArtikelService.getTitles();
  }

}
