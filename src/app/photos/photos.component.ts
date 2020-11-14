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
    let url = 'http://localhost:1234/photos/fake';
    this._httpClient.get(url)
      .subscribe((res: any) => {
        this.items = res;
        this.isLoading = false;
      })
  }

  onSave() {
    let url = 'http://localhost:1234/photos/save-one';
    this._httpClient.post(url, null).
      subscribe((res: any) => {
        alert(res.message)
      });
  }

  onUpdate() {
    let url = 'http://localhost:1234/photos/update-one';
    this._httpClient.put(url, null).
      subscribe((res: any) => {
        alert(res.message)
      });
  }

  onDelete() {
    let url = 'http://localhost:1234/photos/delete-one';
    this._httpClient.delete(url).
      subscribe((res: any) => {
        alert(res.message)
      });
  }

}
