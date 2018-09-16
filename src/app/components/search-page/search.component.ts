import { Component, OnInit } from '@angular/core';
import {MovieDBService} from '@app/services/movie-db.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
blob: any;
form: FormGroup;
page = 1;
maxNumberOfPages = 1;
type: string;
tv: boolean;
  constructor(private searchService: MovieDBService ) { }

  ngOnInit() {
   this.form = new FormGroup ({
      searchText: new FormControl('', [Validators.required,
        Validators.minLength(3)]),
    });
   this.tv = false;
   this.type = 'movie';
    this.search();
  }
searchClick() {
    if (this.form.controls['searchText'].valid) {
      this.page = 1;
      const crit = this.form.controls['searchText'].value;
      this.searchWithParameters(crit, this.type, this.page);
    }
}
pagination(page: number) {
  const crit = this.form.controls['searchText'].value;
  this.searchWithParameters(crit, this.type, page);
}

  search() {
    this.searchService.getSearch().then(res =>  {this.blob = res; this.maxNumberOfPages = res.total_pages; } );

  }
  searchWithParameters(criteria: string, type: string, pageNumber: number) {
    this.searchService.getSearchWithParameters(criteria, type, pageNumber)
      .then(res => {this.blob = res; this.maxNumberOfPages = res.total_pages; } );
  }

  toggleType(type: number) {
    if (type === 2) {
      this.tv = true;
      this.type = 'tv';
    }
    if (type === 1) {
      this.tv = false;
      this.type = 'movie';
    }
    console.log(this.type);
}

validControls(): boolean {
 return this.form.controls['searchText'].invalid &&
   (this.form.controls['searchText'].touched || this.form.controls['searchText'].dirty);
}

}
