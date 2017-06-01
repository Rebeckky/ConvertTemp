import { Component } from '@angular/core'

@Component ({
    selector: 'calculate-celsius',
    templateUrl: `./calculate-celsius.component.html`,
    styleUrls: ['./calculate-fahrenheit.component.css']
})

export class CalculateCelsiusComponent{
    value = -17.777778;
    calculateCelsius(box: number){
        this.value = parseFloat(((box - 32.0)*(5.0/9.0)).toFixed(6));
    }
}