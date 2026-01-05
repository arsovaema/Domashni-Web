import { Component, Input} from '@angular/core';
import { Shofer } from '../shofer';

@Component({
  selector: 'app-vozac',
  imports: [],
  templateUrl: './vozac.html',
  styleUrl: './vozac.css',
})
export class Vozac {
   @Input()
   ime:String="";
    @Input()
    motordzija: Shofer | undefined;

    funk(){
      console.log("me stisna");
    }
    @Input()
    index:number=0;
}
