import { districtclass } from "../districtclass";
import { keyframes } from "@angular/animations";
import {
  analyzeAndValidateNgModules,
  identifierModuleUrl,
  splitClasses
} from "@angular/compiler";
import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { tick } from "@angular/core/testing";
import { stateclass } from "../stateclass";

@Component({
  selector: "app-statename",
  templateUrl: "./statename.component.html",
  styleUrls: ["./statename.component.css"]
})
export class StatenameComponent implements OnInit {
  public statename: stateclass[] = [];
  public districtname: districtclass[] = [];
  public name1: stateclass[] = [];
  names2: any | undefined;
  selectedopt = 0;
  k: any = 0;
  j4 = 40;
  j5: any;
  i10 = 0;
  i11 = 0;
  names: any | undefined;
  name: any;
  id1 = 0;

  k2 = 0;
  public Selectedval = 0;

  constructor() {}
  ngOnInit(): void {
    this.statename = [{ id: 0, name: "" }];
    this.districtname = [{ id1: 0, name1: "" }];
    // this.name1 = [{id :0,name: ''}]
  }
  newaddfunc(k: any) {
    this.k = k + 1;
    localStorage.setItem("token", this.k);
    return this.k;
  }
  newaddfunc2(k2: number) {
    this.k2 = k2 + 1;
  }

  appendfunc(id: any, state: any) {
    this.i10 = this.i10 + 1;

    this.statename.push({ id: this.i10, name: state });
  }
  appenddist(i11: number, district: any) {
    this.i11 = this.Selectedval;
    this.districtname.push({ id1: this.i11, name1: district });
    console.log(this.districtname);
  }
}
