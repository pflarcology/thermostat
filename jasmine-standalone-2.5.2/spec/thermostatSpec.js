'use strict';

describe('thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('should have a start temperature', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('should be able to increase the temperature by 1', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21)
  });

  it('should be able to decrease the temperature by 1', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temperature).toEqual(19)
  });

  it("should not be able to go below 10", function(){
    for(var i=0; i<10; i++) {
      thermostat.decreaseTemp();
    };
    expect( function(){thermostat.decreaseTemp()}).toThrow(new Error("Can't lower temperature: trying to go below minimum"))
  });

  it("should not be able to go above 25 when powermode is on", function(){
    for(var i=0; i<5; i++) {
      thermostat.increaseTemp();
    };
    expect( function(){thermostat.increaseTemp()}).toThrow(new Error("Can't increase temperature: trying to go above maximum"))
  });

  it("should have a default power mode to on", function(){
    expect(thermostat.powerMode).toBe(true)
  });

  it("should be able to change powermode", function(){
    thermostat.powerToggle();
    expect(thermostat.powerMode).toBe(false)
  });

  it("should throw an error when increasing temp above power mode maximum temp", function(){
    thermostat.powerToggle();
    for(var i=0; i<12; i++) {
      thermostat.increaseTemp();
    };
    expect( function(){thermostat.increaseTemp()}).toThrow(new Error("Can't increase temperature: trying to go above maximum"))
  });

  it("should be able to reset the temperature properties", function() {
    thermostat.increaseTemp(1);
    thermostat.powerToggle();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
    expect(thermostat.powerMode).toBe(true);
  });

  it("should be high usage when above 25", function() {
    thermostat.powerToggle();
    for(var i=0; i<6; i++) {
      thermostat.increaseTemp();
    };
    expect(thermostat.energy()).toEqual('high-usage')
  });

  it("should be medium usage when below 25", function(){
    expect(thermostat.energy()).toEqual("medium-usage")
  });

  it("should be low usage when temperatue is below 18", function() {
    for(var i=0; i<3; i++) {
      thermostat.decreaseTemp();
    };
    expect(thermostat.energy()).toEqual("low-usage")
  });
});
