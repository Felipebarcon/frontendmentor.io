import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  public ratingStar: string[] = ['1', '2', '3', '4', '5'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToThankYouMessage(): void {
    this.router.navigate(['/validation']);
  }
}
