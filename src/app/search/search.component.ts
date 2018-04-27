import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlgoliaService } from '../services/algolia.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public queryString: string
  public hits: any;
  public isSearch: boolean = false;

  constructor(public algolia: AlgoliaService) { }

  ngOnInit() {
  }

  searchFor(event) {
    this.algolia.search(this.queryString).then((content) => {
      this.hits = content;
    })
    this.isSearch = true;
    this.fillStars(this.hits);
  }

  fillStars(hits) {
    for (let hit in hits.hits) {
      let star1 = document.getElementsByClassName("star1");
      let star2 = document.getElementsByClassName("star2");
      let star3 = document.getElementsByClassName("star3");
      let star4 = document.getElementsByClassName("star4");
      let star5 = document.getElementsByClassName("star5");
      let starsCount = hits.hits[hit].rounded_stars_count;
      if (starsCount == 4) {
        star5[hit].classList.remove('plain');
        star5[hit].classList.add('empty');
      }
      else if (starsCount == 3) {
        star4[hit].classList.remove('plain');
        star4[hit].classList.add('empty');
        star5[hit].classList.remove('plain');
        star5[hit].classList.add('empty');
      }
      else if (starsCount == 2) {
        star3[hit].classList.remove('plain');
        star3[hit].classList.add('empty');
        star4[hit].classList.remove('plain');
        star4[hit].classList.add('empty');
        star5[hit].classList.remove('plain');
        star5[hit].classList.add('empty');
      }
      else {
        star2[hit].classList.remove('plain');
        star2[hit].classList.add('empty');
        star3[hit].classList.remove('plain');
        star3[hit].classList.add('empty');
        star4[hit].classList.remove('plain');
        star4[hit].classList.add('empty');
        star5[hit].classList.remove('plain');
        star5[hit].classList.add('empty');
      }
    }
  }

}
