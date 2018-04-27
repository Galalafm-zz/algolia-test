import { Component, OnInit } from '@angular/core';
import { AlgoliaService } from './services/algolia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public queryString: string
  public hits: any;

  constructor(private algolia: AlgoliaService) { }

  ngOnInit() {
  }

}
