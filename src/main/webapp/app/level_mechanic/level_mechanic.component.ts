import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LevelMechanic } from './level_mechanic.model';
import { HttpResponse } from '@angular/common/http';
import { LevelMechanicService } from './level_mechanic.service';
import { ActivatedRoute } from '@angular/router';
import { LevelElement } from './level_element.model';
import { faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';


class CssObject {
  name: string;
  base: string[];
  toFind: string[];
}

@Component({
  selector: 'app-level-mechanic',
  templateUrl: './level_mechanic.component.html',
  styleUrls: ['./level_mechanic.component.css']
})
export class LevelMechanicComponent implements OnInit, AfterViewInit {
  levelMechanic: LevelMechanic = new LevelMechanic();
  faArrowCircleLeft = faArrowCircleLeft;
  containerCss : CssObject;
  elementsCss: CssObject[];

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
  }

  draw(target: string) {
    switch (target) {
      case "containerBase":
        let containerCssBaseDefault = "position:absolute;top:0;left:0;height:100%;z-index:1;" + (this.levelMechanic.split ? "width:100%;" : "background-color:#f2f3ae;width:50%;");
        document.getElementById("containerBase").style.cssText =
          (this.levelMechanic.containerCssBase ? this.levelMechanic.containerCssBase : "") + containerCssBaseDefault;
        break;
      case "containerToFind":
        let containerCssToFindDefault = "background-color:#d58936;position:absolute;height:100%;z-index:1;top:0;" + (this.levelMechanic.split ? "right:0;width:50%;" : "left:0;width:100%;");
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
    var elementDim = Math.floor(document.documentElement.clientHeight / 5);
    var cssDefault = (le.elementImage ? "width:" + elementDim + "px;height:" + elementDim + "px;" : "");
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

  drawAnswer(event: any) {
    if (event.target.id == 'answerContainer') {
      this.draw('containerBase');
      let cssTemp = document.getElementById("containerBase").style.cssText;
      document.getElementById("containerBase").style.cssText = event.target.value + cssTemp;
    } else {
      for (const element of this.levelMechanic.levelElements) {
        if (element.name == event.target.id) {

          var elementDim = Math.floor(document.documentElement.clientHeight / 5);
          var cssDefault = (element.elementImage ? "width:" + elementDim + "px;height:" + elementDim + "px;" : "");
          var cssBase = element.cssBase;
          document.getElementById("elementBase" + element.order).style.cssText = event.target.value + cssDefault + cssBase;
        }
      }
    }
  }

  private onSuccess(data, headers) {
    this.levelMechanic = data;
    this.draw("all");
    this.containerCss = new CssObject;
    this.containerCss.name = "conteneur";
    this.containerCss.base = (this.levelMechanic.containerCssBase ? this.levelMechanic.containerCssBase.split(";").filter(attr => attr) : []);
    this.containerCss.toFind = (this.levelMechanic.containerCssToFind ? this.levelMechanic.containerCssToFind.split(";").filter(attr => attr) : []);
    this.elementsCss = [];
    for (const le of this.levelMechanic.levelElements) {
      if (!this.elementsCss.some(e => e.name == le.name) && (le.cssToFind)) {
        let eCss = new CssObject;
        eCss.name = le.name;
        eCss.base = (le.cssBase ? le.cssBase.split(";").filter(attr => attr) : []);
        eCss.toFind = (le.cssToFind ? le.cssToFind.split(";").filter(attr => attr) : []);
        this.elementsCss.push(eCss);
      }
    }
  }

  private onError(error) {
    //console.log("error");
  }

}
