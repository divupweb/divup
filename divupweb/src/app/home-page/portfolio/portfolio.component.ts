import { Component, OnInit } from '@angular/core';
import {DbService} from "../../db.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio_items=[];
  constructor(private service:DbService) {

  }

  ngOnInit() {
    this.service.getPortfolio().subscribe((data)=>{this.portfolio_items=data;});
  }
  redirect(path:string){
    window.location.href= path;
  }
}
