import { Component, OnInit } from '@angular/core';
import { ArtikelServiceService } from '../artikel-service.service';

@Component({
  selector: 'app-startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {
artikel:any = [{}];
  constructor(private  ArtikelService: ArtikelServiceService) { }

  ngOnInit(): void {
    this.artikel = this.ArtikelService.getLatest()
  }

}
