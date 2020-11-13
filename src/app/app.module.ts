import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotosService } from './photos.service';
import { PhotoShowComponent } from './photo-show/photo-show.component';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule ],
  declarations: [ AppComponent, PhotoShowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PhotosService]
})
export class AppModule { }
