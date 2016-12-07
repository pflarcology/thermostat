'use strict';

const DEFAULT_TEMP = 20;
const MINIMUM_TEMP = 10;
const MAXIMUM_TEMP = 32;
const POWERMODE_TEMP = 25;

function Thermostat() {
  this.temperature = DEFAULT_TEMP;
  this.powerMode = true;
}

  Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
  };

  Thermostat.prototype.increaseTemp = function() {
    if(this.powerMode){
      var maxTemp = POWERMODE_TEMP;
    }
    else {
      var maxTemp = MAXIMUM_TEMP;
    }

    if(this.temperature + 1 > maxTemp) {
      throw Error("Can't increase temperature: trying to go above maximum")
    }
    else {
      this.temperature += 1;
    }
  };

  Thermostat.prototype.decreaseTemp = function() {
    if(this.temperature - 1 < MINIMUM_TEMP ) {
      throw Error("Can't lower temperature: trying to go below minimum");
    }
    else {
      this.temperature -= 1;
    }
  };

  Thermostat.prototype.powerToggle = function() {
    this.powerMode = !this.powerMode;
  };

  Thermostat.prototype.reset = function() {
    this.temperature = 20;
    this.powerMode = true;
  };

  Thermostat.prototype.isSavingMode = function(){
    return this.powerMode;
  };

  Thermostat.prototype.energy = function(){
    if(this.temperature > 25){
      return 'high-usage';
    }
    else if(this.temperature > 18 ) {
      return 'medium-usage';
    }
    else{
      return 'low-usage';
    }
  };
