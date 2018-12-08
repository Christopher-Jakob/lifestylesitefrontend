import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadedpictures',
  templateUrl: './uploadedpictures.component.html',
  styleUrls: ['./uploadedpictures.component.css']
})
export class UploadedpicturesComponent implements OnInit {

  constructor() { }

  uploadedphotos = [
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    },
    {
      image: 'https://www.gotitabrands.com/wp-content/uploads/2018/03/BT-XD785-2-100x100.png'
    }

  ];

  ngOnInit() {
  }

}
