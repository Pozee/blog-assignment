import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-logga-in',
  templateUrl: './logga-in.component.html',
  styleUrls: ['./logga-in.component.css']
})
export class LoggaInComponent implements OnInit {
  authenticate(value:boolean) {
    this.LoginService.setValue(value);
  }

  constructor(private LoginService: LoginServiceService) { }

  ngOnInit(): void {
  }

}
