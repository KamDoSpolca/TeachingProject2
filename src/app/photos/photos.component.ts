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
  isUpdate = false;
  helpfulEditId = '';
  testForm: FormGroup;
  isError = false;

  constructor(
    private _httpClient: HttpClient,
    private _formBuilder: FormBuilder
  ) { }


  ngOnInit() {

    this.initForm();





    let url = 'http://localhost:1234/photos/get-all';
    this._httpClient.get(url)
      .subscribe((res: any) => {
        this.items = res.data;
        this.isLoading = false;
      }, error => {
          this.isLoading = false;
          this.isError = true;
      })
  }

  initForm() {

    this.testForm = this._formBuilder.group({
      title: new FormControl(null),
      url: new FormControl(null)
    })

  }

  onUpdate(id) {

    const photoTitle = this.testForm.value.title;
    const photoUrl = this.testForm.value.url;

    let url = `http://localhost:1234/photos/update-one/${id}`;
    this._httpClient.put(url, { photoUrl, photoTitle }).
      subscribe((res: any) => {
        alert(res.message);
        this.onCancel();
      });
  }

  onDelete(id) {
    let url = 'http://localhost:1234/photos/delete-one/' + id;
        this._httpClient.delete(url).
      subscribe((res: any) => {
        alert(res.message)
      });
  }

  onCancel() {

    this.isUpdate = false;
    this.initForm();

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

  onEdit(item) {
    this.testForm.get('title').setValue(item.title);
    this.testForm.get('url').setValue(item.url);
    this.isUpdate = true;
    this.helpfulEditId = item._id;
    window.scroll(0,0)

  }

  onRightArrow() {
    document.getElementById("slider").scrollLeft += 1000;
  }

  onLeftArrow() {
    document.getElementById("slider").scrollLeft -= 1000; 
  }
}
