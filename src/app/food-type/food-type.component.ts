import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AlgoliaService } from '../services/algolia.service';

@Component({
  selector: 'app-food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.scss']
})
export class FoodTypeComponent implements OnInit {

  constructor(public algolia: AlgoliaService) { }

  ngOnInit() {
  }

}
