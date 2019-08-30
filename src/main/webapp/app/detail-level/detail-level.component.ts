import { Component, OnInit, Input } from '@angular/core';
import { LevelService } from '../level/level.service';
import { Level } from '../level/level.model';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Comment } from '../comment/comment.model'
import { AuthenticationService } from '../authentication/authentication.service';
import { CommentService } from '../comment/comment.service';
import { EvaluationService } from '../evaluation/evaluation.service';
import { Evaluation } from '../evaluation/evaluation.model';

@Component({
  selector: 'app-detail-level',
  templateUrl: './detail-level.component.html',
  styleUrls: ['./detail-level.component.css']
})
export class DetailLevelComponent implements OnInit {
  level: Level;
  comments: Comment[];
  collapsedAnswer:number = 0;
  _selectedLevel: number

  @Input()
  set selectedLevel(selectedLevel: number) {
    this._selectedLevel = selectedLevel;
    if (this._selectedLevel && this._selectedLevel > 0) {
      this.loadLevel(this._selectedLevel);
    }
  }

  constructor(
      private levelService: LevelService,
      private route: ActivatedRoute,
      private authenticationService: AuthenticationService,
      private commentService : CommentService,
      private evaluationService : EvaluationService) { }

  ngOnInit() {
    if (this._selectedLevel && this._selectedLevel > 0) {
      this.loadLevel(this._selectedLevel);
    }
  }

  loadLevel(id:number) {
    this.levelService
      .find(id)
      .subscribe(
        (res: HttpResponse<Level>) => {
          this.level = res.body;
          this.orderComments();
        },
        (res: HttpResponse<any>) => console.log("error"));
  }

  orderComments() {
    if (this.level.comments && this.level.comments.length > 0) {
      for (const c of this.level.comments) {
        if (c.children && c.children.length > 1) {
          c.children.sort(function(a, b) {
            if (a.id < b.id)
              return -1;
            if (a.id > b.id)
              return 1;
            return 0;
          });
        }
      }
      this.level.comments.sort(function(a, b) {
        if (a.id < b.id)
          return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      });
    }

  }

  saveComment(event, id) {
    let comment = new Comment();
    comment.user = this.authenticationService.currentUserValue;
    if (id == 0) {
      comment.levelId = this.level.id;
    } else {
      comment.parentId = id;
    }
    comment.active = true;
    comment.dateCreated = new Date();
    comment.message = event.target.elements[0].value;
    
    this.commentService
      .create(comment)
      .subscribe(response => {
        this.loadLevel(this.level.id);
        this.collapsedAnswer = 0;
      });
  }

  evaluate(type:number) {
    let evaluation = new Evaluation();
    evaluation.date = new Date();
    evaluation.level = this.level;
    evaluation.type = type;
    evaluation.user = this.authenticationService.currentUserValue;

    this.evaluationService
      .create(evaluation)
      .subscribe(response => {
        this.loadLevel(this.level.id);
      });
  }
}
