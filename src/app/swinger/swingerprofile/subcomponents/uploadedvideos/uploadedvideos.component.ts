import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadedvideos',
  templateUrl: './uploadedvideos.component.html',
  styleUrls: ['./uploadedvideos.component.css']
})
export class UploadedvideosComponent implements OnInit {

  constructor() { }

  uploadedvideos = [
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
