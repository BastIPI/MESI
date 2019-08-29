import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LevelMechanic } from './level_mechanic.model';
import { HttpResponse } from '@angular/common/http';
import { LevelMechanicService } from './level_mechanic.service';
import { ActivatedRoute } from '@angular/router';
import { LevelElement } from './level_element.model';

@Component({
  selector: 'app-level-mechanic',
  templateUrl: './level_mechanic.component.html',
  styleUrls: ['./level_mechanic.component.css']
})
export class LevelMechanicComponent implements OnInit, AfterViewInit {
  levelMechanic: LevelMechanic = new LevelMechanic();

  constructor(private levelMechanicService: LevelMechanicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.levelMechanic.levelElements = [];
    this.levelMechanicService
      .find(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (res: HttpResponse<LevelMechanic>) => this.onSuccess(res.body, res.headers),
        (res: HttpResponse<any>) => this.onError(res.body));
  }

  ngAfterViewInit() {
    this.draw("all");
  }

  draw(target: string) {
    switch (target) {
      case "containerBase":
        let containerCssBaseDefault = "position:absolute;top:0;left:0;height:100%;z-index:1;" + (this.levelMechanic.split ? "width:100%;" : "width:50%;");
        document.getElementById("containerBase").style.cssText =
          (this.levelMechanic.containerCssBase ? this.levelMechanic.containerCssBase : "") + containerCssBaseDefault;
        break;
      case "containerToFind":
        let containerCssToFindDefault = "background-color:#f2f2f2;position:absolute;height:100%;z-index:1;top:0;" + (this.levelMechanic.split ? "right:0;width:50%;" : "left:0;width:100%;");
        document.getElementById("containerToFind").style.cssText =
          (this.levelMechanic.containerCssBase ? this.levelMechanic.containerCssBase : "") +
          (this.levelMechanic.containerCssToFind ? this.levelMechanic.containerCssToFind : "") +
          containerCssToFindDefault;
        break;
      case "elements":
        for (let le of this.levelMechanic.levelElements) {
          this.drawElement(le);
        }
        break;
      default:
        this.draw("containerBase");
        this.draw("containerToFind");
        this.draw("elements");

        break;
    }
  }

  drawElement(le : LevelElement) {

    var elementDim = Math.floor(document.documentElement.clientHeight / 6);
    var cssDefault = "width:" + elementDim + "px;height:" + elementDim + "px;";
    var cssBase = le.cssBase;
    var cssToFind = le.cssToFind;

    var observer = new MutationObserver(function(mutations) {
      if (document.contains(document.getElementById("elementBase" + le.order)) && document.contains(document.getElementById("elementToFind" + le.order))) {
        document.getElementById("elementBase" + le.order).style.cssText = cssDefault + cssBase;
        document.getElementById("elementToFind" + le.order).style.cssText = cssDefault + cssBase + cssToFind;
        observer.disconnect();
       }
   });
    observer.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
  }

  private onSuccess(data, headers) {
    this.levelMechanic = data;
  }

  private onError(error) {
    //console.log("error");
  }

}
