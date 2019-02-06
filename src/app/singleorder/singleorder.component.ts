import { Component, OnInit } from '@angular/core';
import { SingleodserviceService } from '../singleodservice.service';

@Component({
  selector: 'app-singleorder',
  templateUrl: './singleorder.component.html',
  styleUrls: ['./singleorder.component.css']
})
export class SingleorderComponent implements OnInit {

  singleOdata: any;
  singleOdatashow=false;

  constructor(private getSingleodserviceService: SingleodserviceService) { }

  ngOnInit() { }

  getdetails() {
    // this.getSingleodserviceService.getdetailsval().subscribe( res =>alert(JSON.stringify(res)));
    this.singleOdatashow=true;
    this.getSingleodserviceService.getdetailsval().subscribe
      (data => {
      this.singleOdata = data;
        console.log(" data" + this.singleOdata);
      }, error => {
        console.log(error.message);
      }
      );
    // this.singleOdata
    // this.singleOdata = JSON.stringify(this.singleOdata)
    // alert(this.singleOdata);
  }

}
