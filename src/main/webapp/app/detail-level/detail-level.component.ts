import { Component, OnInit } from '@angular/core';
import { LevelService } from '../level/level.service';
import { Level } from '../level/level.model';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Comment } from '../comment/comment.model'

@Component({
  selector: 'app-detail-level',
  templateUrl: './detail-level.component.html',
  styleUrls: ['./detail-level.component.css']
})
export class DetailLevelComponent implements OnInit {
  level: Level;
  comments: Comment[];

  constructor(private levelService: LevelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.levelService
      .find(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (res: HttpResponse<Level>) => {
          console.log(res.body);
          this.level = res.body;
        },
        (res: HttpResponse<any>) => console.log("error"));
  }

}
