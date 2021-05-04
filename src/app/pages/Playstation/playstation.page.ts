import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-playstation',
  templateUrl: 'playstation.page.html',
  styleUrls: ['playstation.page.scss']
})
export class PlaystationPage {

  public playStore:string = "PlaStation";

  constructor(
     private router: Router
  ) { }

}
