import { Injectable, NgZone } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
import * as algoliasearch from 'algoliasearch';
import * as algoliasearchHelper from 'algoliasearch-helper';

@Injectable()
export class AlgoliaService {

  client = algoliasearch('69HC1ALCC6', 'dcd84c9bd4ee0b2590f1389883cc7ee4');
  index = this.client.initIndex('restaurants');
  hits: any;

  search(queryString: string) {
    return this.index.search({ query: queryString, hitsPerPage: 10 }).then((content) => {
      return content;
    }, (err) => {
      console.log(err);
    })
  }
}
