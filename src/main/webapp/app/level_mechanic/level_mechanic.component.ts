import { Component, OnInit } from '@angular/core';
import { LevelMechanic } from './level_mechanic.model';
import { HttpResponse } from '@angular/common/http';
import { LevelMechanicService } from './level_mechanic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-mechanic',
  templateUrl: './level_mechanic.component.html',
  styleUrls: ['./level_mechanic.component.css']
})
export class LevelMechanicComponent implements OnInit {
  levelMechanic: LevelMechanic;

  constructor(private levelMechanicService: LevelMechanicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.levelMechanicService
      .find(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (res: HttpResponse<LevelMechanic>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body));
  }

  private onSuccess(data, headers) {
    this.levelMechanic = data;
  }

  private onError(error) {
    //this.alertService.error(error.error, error.message, null);
  }

}
