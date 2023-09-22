import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
    selector: 'album-update-dialog',
    templateUrl: 'album-update-dialog.html',
    styleUrls: ['./album-update-dialog.scss']
})

export class AlbumUpdateDialog implements OnInit {
    album = {
        title: '',
        year: 1900,
        artist: '',
        photoUrl: ''
    };

    constructor(private http: HttpClient) { }

    ngOnInit(): void { }

    updateAlbum(album: any) {
        this.http.put(`http://localhost:3000/album/update/${album._id}`, album).subscribe(
        );
    }

}