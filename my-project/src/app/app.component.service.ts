import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GetDataService {
    results: any;
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('./assets/app.results.json')
        .map((response: Response) => response);
    }
}