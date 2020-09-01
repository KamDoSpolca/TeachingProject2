import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photography-app';
  isPhotoVisible = false;

  onUserClick() {
    alert('Button clicked!');
  }

  onAddPhoto() {
    this.isPhotoVisible = true;
    

    

  }
}
