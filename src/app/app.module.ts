import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



import { AlbumListComponent } from './album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewAlbumDialog } from 'src/app/new-album-dialog/new-album.dialog';
import { AlbumUpdateDialog } from './album-update-dialog/album-update-dialog';
import { RatingComponent } from './album-rating/album-rating.component';



@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    NewAlbumDialog,
    AlbumUpdateDialog,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([{
      path: '', component: AlbumListComponent
    }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
