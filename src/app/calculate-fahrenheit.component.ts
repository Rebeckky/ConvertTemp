import { Component } from '@angular/core';

@Component({
    selector: 'calculate-fahrenheit',
    templateUrl:`./calculate-fahrenheit.component.html`,
    styleUrls: ['./calculate-fahrenheit.component.css']
})

export class CalculateFahrenheitComponent{
    value = 32;
    calculateFahrenheit(fbox: number){
        this.value = ((fbox * 9)/5) + 32;
    }
}