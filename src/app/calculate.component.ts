import { Component } from '@angular/core';

@Component({
    selector: 'calculate',
    templateUrl:`./calculate.component.html`,
    styleUrls: ['./calculate.component.css']
})

export class CalculateComponent{
    value = 32;
    calculateFarenheit(box: number){
        this.value = ((box * 9)/5) + 32;
    }
}