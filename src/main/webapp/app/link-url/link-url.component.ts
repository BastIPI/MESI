import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-link-url',
  templateUrl: './link-url.component.html',
  styleUrls: ['./link-url.component.css']
})
export class LinkUrlComponent implements OnInit {
  iconBack = faArrowCircleLeft;
  constructor() { }

  ngOnInit() {
  }

}
