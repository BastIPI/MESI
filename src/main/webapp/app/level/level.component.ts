import { Component, OnInit } from '@angular/core';
import { Level } from './level.model';
import { HttpResponse } from '@angular/common/http';
import { LevelService } from './level.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  levels: Level[];

  constructor(private levelService: LevelService) { }

  ngOnInit() {
    this.levelService
      .getAll()
      .subscribe(
        (res: HttpResponse<Level[]>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body));
  }

  private onSuccess(data, headers) {
    this.levels = data;
  }

  private onError(error) {
    //this.alertService.error(error.error, error.message, null);
  }

}
