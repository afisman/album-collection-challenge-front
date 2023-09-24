import { Component, OnInit, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'album-update-dialog',
    templateUrl: 'album-update-dialog.html',
    styleUrls: ['./album-update-dialog.scss']
})

export class AlbumUpdateDialog implements OnInit {
    public album: any;

    genres: Array<string> = ['Rock', 'Jazz', 'Classical', 'Latin', 'Techno', 'Other'];



    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { album: Object },
        private http: HttpClient) { }

    ngOnInit(): void { }

    updateAlbum(album: any) {
        console.log(album)
        this.http.put(`http://localhost:3000/album/update/${album._id}`, album).subscribe(
            (data: any) => {
                console.log(data);
            }
        );
    }

}