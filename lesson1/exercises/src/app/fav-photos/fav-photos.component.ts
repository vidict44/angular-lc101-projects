import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://media.boingboing.net/wp-content/uploads/2018/07/Wednesday-Addams.jpg';
  image3 = 'https://www.thenavagepatch.com/wp-content/uploads/2017/09/Cousin-Itt-Halloween-prop-F01.jpg';

  constructor() { }

  ngOnInit() {
  }

}