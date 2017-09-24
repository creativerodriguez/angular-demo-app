import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

@Input('rating-value') rating = 0;
@Input('numOfReviews') numOfReviews = 0;

  onClick(ratingValue){
    this.rating = ratingValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
