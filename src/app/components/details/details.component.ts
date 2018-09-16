import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MovieDBService} from '../../services/movie-db.service';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  blob: any;
  id: number;
  filledStars: Array<number>;
  greyStars: Array<number>;
  type: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: MovieDBService) {
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.type = params['type'];
       this.service.getDetails(this.id, this.type)
         .then(res => {
           this.blob = res;
           const starNumber = Math.round(res.vote_average);
           this.filledStars  = Array(starNumber).fill(0).map((x, i ) => i);
           this.greyStars  = Array(10 - starNumber ).fill(0).map((x, i ) => i);
         } );
    });


  }
}
