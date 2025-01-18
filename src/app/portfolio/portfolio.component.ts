import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private _TestService:TestService) {}

  ngOnInit(): void {
    this._TestService.getData().subscribe((data) => {
      console.log(data);
    });
  }

  TWDB:string = '';

  showLayer(src:string){
    document.querySelector('.layer')?.classList.remove('d-none');
    document.querySelector('.layer img')?.setAttribute("src" , src);
  }

  hideLayer(e:Event){
    if(e.target != document.querySelector('.layer img')){
      document.querySelector('.layer')?.classList.add('d-none');
    }
  }

}
