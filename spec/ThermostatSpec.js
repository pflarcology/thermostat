describe("Thermostat", function() {

  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("It should have a default start temperature of 20°C", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("Should raise by 1°C when when raise temperature is called", function() {
    thermostat.raiseTemperature()
    expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE+1)
  });

  it("Should decrease by 1°C when when lower temperature is called", function() {
    thermostat.lowerTemperature()
    expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE-1)
  });

  it("Should throw error when lower temperature is called and temperature is at or below the minimum temperature", function() {
    thermostat.temperature = 10
    expect(function(){ thermostat.lowerTemperature(); }).toThrowError("Minimum temperature reached")
  });

  it("Should throw error when raise temperature is called and temperature is at or above the power save max temperature", function() {
    thermostat.temperature = 25
    expect(function(){ thermostat.raiseTemperature(); }).toThrowError("Maximum temperature reached")
  });

  it("Should have power save on as default", function () {
    expect(thermostat.powerSave).toEqual(true)
  });

  it("Should have power save on as default", function () {
    thermostat.changePowerSaveMode()
    expect(thermostat.powerSave).toEqual(false)
  });

  it("should throw error when raise temperature is called and temperature is at or above the maximum temperature", function(){
    thermostat.temperature = 32
    expect(function(){ thermostat.raiseTemperature(); }).toThrowError("Maximum temperature reached")
  });

  it("Should reset the temperature to the default temperature when reset", function() {
    thermostat.temperature = 25
    thermostat.resetTemperature()
    expect(thermostat.temperature).toEqual(DEFAULT_TEMPERATURE)
  });

  it("should show the current energy usage is high when the temperature is above 25", function() {
    thermostat.changePowerSaveMode();
    for(var i=0; i<6; i++) {
    thermostat.raiseTemperature();
    };
    expect(thermostat.energyUsage()).toEqual("high-usage")
  });

  it("should show the current energy usage is medium when the temperature is above 17 and below 26", function() {
    expect(thermostat.energyUsage()).toEqual("medium-usage")
  });

  it("should show the current energy usage is low when the temperature is below 18", function() {
    for(var i=0; i<3; i++) {
    thermostat.lowerTemperature();
    };
    expect(thermostat.energyUsage()).toEqual("low-usage")
  });


});
