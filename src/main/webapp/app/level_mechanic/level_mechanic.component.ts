import { Component, OnInit } from '@angular/core';
import { LevelMechanic } from './level_mechanic.model';
import { HttpResponse } from '@angular/common/http';
import { LevelMechanicService } from './level_mechanic.service';

@Component({
  selector: 'app-level-mechanic',
  templateUrl: './level_mechanic.component.html',
  styleUrls: ['./level_mechanic.component.css']
})
export class LevelMechanicComponent implements OnInit {
  levels: LevelMechanic[];

  constructor(private levelMechanicService: LevelMechanicService) { }

  ngOnInit() {
    this.levelMechanicService
      .getAll()
      .subscribe(
        (res: HttpResponse<LevelMechanic[]>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body));
  }

  private onSuccess(data, headers) {
    this.levels = data;
  }

  private onError(error) {
    //this.alertService.error(error.error, error.message, null);
  }

}
