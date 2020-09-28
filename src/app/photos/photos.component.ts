import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
   
export class PhotosComponent implements OnInit {

  items = [];
  isLoading = true;

  constructor(
    private _httpClient: HttpClient
  ) { }


  ngOnInit() { 
    let url = 'https://jsonplaceholder.typicode.com/photos';
    this._httpClient.get(url)
      .subscribe((res: any) => {
        this.items = res;
        this.isLoading = false;
      })
    
  }

}
