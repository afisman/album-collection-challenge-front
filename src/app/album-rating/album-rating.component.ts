import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'album-rating',
    templateUrl: './album-rating.component.html',
    styleUrls: ['./album-rating.component.scss']
})

export class RatingComponent implements OnInit {
    @Input()
    album: any;


    @Input() maxRating = 5;
    maxRatingArr: any = [];
    @Output()
    onRating: EventEmitter<Object> = new EventEmitter<Object>()

    @Input() SelectedStar: number = 0;
    previousSelection = 0;

    constructor(private http: HttpClient) { }

    HandleMouseEnter(index: number) {
        this.SelectedStar = index + 1;
    }

    HandleMouseLeave() {
        if (this.previousSelection !== 0) {
            this.SelectedStar = this.previousSelection;
        }
        else {
            this.SelectedStar = 0;
        }
    }

    Rating(index: number, album: any) {
        this.SelectedStar = index + 1;
        this.previousSelection = this.SelectedStar;
        this.onRating.emit(this.SelectedStar + 1)
        console.log(this.SelectedStar)
        this.http.put(`http://localhost:3000/album/score/${album._id}`, { rating: this.SelectedStar }).subscribe();

    }

    ngOnInit(): void {
        this.maxRatingArr = Array(this.maxRating).fill(0);
    }
}