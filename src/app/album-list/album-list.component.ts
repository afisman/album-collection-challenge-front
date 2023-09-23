import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AlbumUpdateDialog } from '../album-update-dialog/album-update-dialog';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  albumList: Array<any> = [];

  constructor(
    public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:3000/album').subscribe((data: Array<any>) => {
      this.albumList = data;
      console.log(this.albumList);
    }

    );
  }

  getAlbum(album: any) {
    this.http.get<any[]>(`http://localhost:3000/album/update/${album._id}`).subscribe();
  }

  openDialogUpdateAlbum(album: any) {

    this.http.get<any[]>(`http://localhost:3000/album/update/${album._id}`).subscribe((data: Object) => {

      const dialogRef = this.dialog.open(AlbumUpdateDialog, { data: data });
      dialogRef.componentInstance.album = data;
    });
  }


  deleteAlbum(album: any, i: number) {
    this.http.delete(`http://localhost:3000/album/delete/${album._id}`).subscribe();
    this.albumList.splice(i, 1);
  }
}