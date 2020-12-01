import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {

  items = [];
  isLoading = true;

  testForm: FormGroup

  constructor(
    private _httpClient: HttpClient,
    private _formBuilder: FormBuilder
  ) { }


  ngOnInit() {

    this.testForm = this._formBuilder.group({
      title: new FormControl(null),
      url: new FormControl(null)
    })




    let url = 'http://localhost:1234/photos/fake';
    this._httpClient.get(url)
      .subscribe((res: any) => {
        this.items = res;
        this.isLoading = false;
      })
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





  onSubmit() {


    const photoTitle = this.testForm.value.title;
    const photoUrl = this.testForm.value.url;



    let url = 'http://localhost:1234/photos/save-one';
    this._httpClient.post(url, { photoUrl, photoTitle }).
      subscribe((res: any) => {
        alert(res.message)
      });

  }





}
