import { Component, OnInit, HostListener } from '@angular/core';
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
  genres: Array<string> = ['Rock', 'Jazz', 'Classical', 'Latin', 'Techno', 'Other'];
  filterText: string = '';
  currentGenre: string = 'All'

  @HostListener('document:keypress', ['$event'])
  //Filter by keystroke
  handleKeyboardEvent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filterText = inputElement.value; // Update filterText directly
    this.filterAlbums();
  }


  @HostListener('document:keydown', ['$event'])
  //Filter by delete keystroke
  handleDeletEvent(event: KeyboardEvent) {
    if (this.filterText.length === 1 && event.key === 'Backspace') {
      this.filterText = ''; // Reset filterText when it's going to be empty

      this.getAllAlbums();
    } else if (event.key === 'Backspace') {
      this.filterAlbums();
    }
  }

  constructor(
    public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:3000/album').subscribe((data: Array<any>) => {
      this.albumList = data;
    }

    );
  }
  //Gets one album data by its ID, used to fill upda
  getAlbum(album: any) {
    this.http.get<any[]>(`http://localhost:3000/album/update/${album._id}`).subscribe();
  }
  //Gets list of all albums
  getAllAlbums() {
    this.http.get<any[]>('http://localhost:3000/album').subscribe((data: Array<any>) => {
      this.albumList = data;
      this.currentGenre = 'All';

    }

    );
  }
  //Gets list of albums by genre
  getFilteredAlbums(genre: string) {
    this.http.get<any[]>(`http://localhost:3000/album/search/${genre}`).subscribe((data: Array<any>) => {
      this.albumList = data;
      this.currentGenre = genre;
    }

    );
  }

  //Gets list of filtered albums by key word
  filterAlbums() {
    if (this.filterText === '') {
      this.getAllAlbums();
    } else {
      this.http.get<any[]>(`http://localhost:3000/album/searchBy/${this.filterText}`).subscribe((data: Array<any>) => {
        this.albumList = data;
      });
    }
  }

  //Opens album update form dialog
  openDialogUpdateAlbum(album: any) {

    this.http.get<any[]>(`http://localhost:3000/album/update/${album._id}`).subscribe((data: Object) => {

      const dialogRef = this.dialog.open(AlbumUpdateDialog, { data: data });
      dialogRef.componentInstance.album = data;
    });
  }

  //Deletes selected album
  deleteAlbum(album: any, i: number) {
    this.http.delete(`http://localhost:3000/album/delete/${album._id}`).subscribe();
    this.albumList.splice(i, 1);
  }
}