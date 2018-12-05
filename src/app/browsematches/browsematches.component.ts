import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browsematches',
  templateUrl: './browsematches.component.html',
  styleUrls: ['./browsematches.component.css']
})
export class BrowsematchesComponent implements OnInit {

  constructor() { }

  usermodel = [
    {
      username: 'tacocat',
      coupletype: 'sw',
      rating: 2,
      swingmatch: 95,
      laststddate: '12-13-2018',
      city: 'Chicago',
      images: [
        "http://www.funnyandhappy.com/wp-content/uploads/2014/f/funny-people-funny-pictures-14.jpg",
        "http://www.funnyandhappy.com/wp-content/uploads/2014/t/the-greatest-chocolate-in-the-world.jpg"
      ]
    },
    {
      username: 'right man',
      coupletype: 'cmw',
      rating: 4,
      swingmatch: 73,
      laststddate: '11-14-2017',
      city: 'Chicago',
      images: [
        "http://www.funnyandhappy.com/wp-content/uploads/2014/f/funny-people-funny-pictures-14.jpg",
        "http://www.funnyandhappy.com/wp-content/uploads/2014/t/the-greatest-chocolate-in-the-world.jpg"
      ]
    },
    {
      username: 'fried rice',
      coupletype: 'sm',
      rating: 4.5,
      laststddate: '12-14-2018',
      swingmatch: 25,
      city: 'Chicago',
      images: [
        "http://www.funnyandhappy.com/wp-content/uploads/2014/f/funny-people-funny-pictures-14.jpg",
        "http://www.funnyandhappy.com/wp-content/uploads/2014/t/the-greatest-chocolate-in-the-world.jpg"
      ]
    }

  ];

  ngOnInit() {
  }

}
/*
username
coupletype
city
swing match
rating
last std check
*/
