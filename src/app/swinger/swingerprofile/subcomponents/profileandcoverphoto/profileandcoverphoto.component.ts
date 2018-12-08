import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileandcoverphoto',
  templateUrl: './profileandcoverphoto.component.html',
  styleUrls: ['./profileandcoverphoto.component.css']
})
export class ProfileandcoverphotoComponent implements OnInit {

  constructor() { }
  coverimage = 'http://covermyfb.com/media/covers/thumb/e4jbIklvmhzrFgLO.jpg';
  userimage = 'https://previews.123rf.com/images/annademyanenko/annademyanenko1504/annademyanenko150400035/39158283-sexy-fit-muscled-couple-in-sportswear-on-neutral-grey-background-hugging.jpg'


  ngOnInit() {
  }

}
