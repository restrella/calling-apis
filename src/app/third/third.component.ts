import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../guards/deactivate.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit, CanComponentDeactivate {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

  canDeactivate() {
    const confirmation = window.confirm(
      'Are you sure want to redirect out of this page?'
    );
    return confirmation;
  }
}
