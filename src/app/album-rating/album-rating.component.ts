import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
    selector: 'album-rating',
    templateUrl: './album-rating.component.html',
    styleUrls: ['./album-rating.component.scss']
})

export class RatingComponent implements OnInit {
    @Input() maxRating = 5;
    maxRatingArr: any = [];
    @Input() SelectedStar: number = 0;

    constructor() { }

    HandleMouseEnter(index: number) {
        this.SelectedStar = index + 1;
    }

    ngOnInit(): void {
        this.maxRatingArr = Array(this.maxRating).fill(0);
    }
}