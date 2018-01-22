import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'orderByColumn'})

export class sortTableComponent implements PipeTransform {
	transform(results: any[], columnType: string[], reverse: number = 1, valueInRow1: string, valueInRow2: string) : any[]{
		if(!results || !columnType || !reverse) {
			return results;
		}
		else {
			return results.sort((row1: string[], row2: string[]) => {
				columnType.forEach(property => {
					valueInRow1 = row1[property];
					valueInRow2 = row2[property];
				})
				return valueInRow1 > valueInRow2 ? reverse : reverse * (-1);
			})
		}
	}
}