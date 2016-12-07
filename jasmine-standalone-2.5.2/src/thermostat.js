function Thermostat() {
  this.temperature = 20;
}

  Thermostat.prototype.increaseTemp = function(temp) {
    this.temperature += temp;
  };

  Thermostat.prototype.decreaseTemp = function(temp) {
    this.temperature -= temp;
  };
