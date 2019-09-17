import { Component, OnInit } from '@angular/core';
import { MyDetailsService } from '../my-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public myImg = "assets/images/image1.jpg";
  public finalDetails;
  constructor(private _myDetails: MyDetailsService) { }

  ngOnInit() {
    this._myDetails.getDetails().subscribe(demo => this.finalDetails = demo);
  }

}
