import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/observable';
import {DrawerService} from '../../services/drawer.service'
import { DataService } from '../../services/data.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-drawer-open',
  templateUrl: './drawer-open.component.html',
  styleUrls: ['./drawer-open.component.css']
})
export class DrawerOpenComponent implements OnInit {

  openingDrawer;
  id: number;
  drawerDetails;
  loginDetails;
  constructor(private drawerService :DrawerService,
     private _route:ActivatedRoute) { }

  ngOnInit() {
    this.id=+this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getTodaysDrawer();
  }

  addToDrawer(){
    this.drawerService.setOpeningDrawer(this.id,this.openingDrawer).subscribe(
      data=>{
        console.log("error aa gya firse")
        console.log(data)
      this.drawerDetails=data;
    
    },
    error =>{ return Observable.throw(error)} 
    );
  }
  getTodaysDrawer(){
    this.drawerService.getTodayDrawer(this.id).subscribe(
      data=>{
        this.drawerDetails=data;
      }
    )
  }

}
