import { Component } from '@angular/core';
import { AirSerivceService } from './../../air-serivce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  flightList: any[] = [];
  //flightListBackup: any[] = [];
  searchFlight: any;
  searching = false;
  sortDirections: number[] = [0, 0, 0, 0];
  // pagingConfig: any = {
  //   startLimit: 1,
  //   endLimit: 1,
  //   currentPage: 1,
  //   itemsPerPage: 10,
  //   totalItems: 0
  // };

  p: number = 1;

  constructor(private airService: AirSerivceService) {
    this.getAll();
  }

  getAll() {
    this.airService.getAir().subscribe((response: any) => {
      //console.log(response);
      this.flightList = response;
      //this.flightListBackup = response;
    });
  }

  toggleSort(columnSerial: any) {
    let columnName: string =
      columnSerial == 0
        ? 'AirlineName'
        : columnSerial == 1
        ? 'OutboundFlightsDuration'
        : columnSerial == 2
        ? 'InboundFlightsDuration'
        : 'TotalAmount';
    if (
      this.sortDirections[columnSerial] == 0 ||
      this.sortDirections[columnSerial] == -1
    ) {
      if (
        columnName == 'AirlineName' ||
        columnName == 'OutboundFlightsDuration' ||
        columnName == 'InboundFlightsDuration'
      ) {
        this.flightList = this.flightList.sort((a, b) =>
          a[columnName] > b[columnName] ? 1 : -1
        );
      } else if (columnName == 'TotalAmount') {
        this.flightList = this.flightList.sort((a, b) =>
          Number(a[columnName]) > Number(b[columnName]) ? 1 : -1
        );
      }
      this.sortDirections[columnSerial] = 1;
    } else {
      if (
        columnName == 'AirlineName' ||
        columnName == 'OutboundFlightsDuration' ||
        columnName == 'InboundFlightsDuration'
      ) {
        this.flightList = this.flightList.sort((a, b) =>
          a[columnName] > b[columnName] ? -1 : 1
        );
      } else if (columnName == 'TotalAmount') {
        this.flightList = this.flightList.sort((a, b) =>
          Number(a[columnName]) > Number(b[columnName]) ? -1 : 1
        );
      }
      this.sortDirections[columnSerial] = -1;
    }
  }

  keyPressAlphanumeric(event: any) {
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
