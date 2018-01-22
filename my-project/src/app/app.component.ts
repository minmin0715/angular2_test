import { Component, OnInit} from '@angular/core';
import {GetDataService} from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GetDataService],
})
export class AppComponent implements OnInit {
  results: any;
  columnType: string[];
  reverse: number = 1;
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getData()
      .subscribe(response => this.results = response);   
  }

  sortTable(columnName: string) {
      this.columnType = columnName.split("'")
      this.reverse = this.reverse * (-1);
      return false;
  }
}
