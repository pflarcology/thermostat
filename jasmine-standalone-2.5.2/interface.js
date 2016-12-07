var currentTemp = $("#current-temp");
var minus = $("#minus");
var thermostat = new Thermostat;
var plus = $("#plus");
var reset = $("#reset");

window.onload = function() {
  currentTemp.text(thermostat.getCurrentTemperature());
};

minus.click( function(){
  thermostat.decreaseTemp();
  currentTemp.text(thermostat.getCurrentTemperature());
});
plus.click( function(){
  thermostat.increaseTemp();
  currentTemp.text(thermostat.getCurrentTemperature());
});

reset.click( function(){
  thermostat.reset();
  currentTemp.text(thermostat.getCurrentTemperature());
});
