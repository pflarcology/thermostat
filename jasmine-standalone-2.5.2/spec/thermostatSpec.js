describe('thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('should have a start temperature', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('should be able to increase the temperature by 1', function() {
    thermostat.increaseTemp(1);
    expect(thermostat.temperature).toEqual(21)
  });

  it('should be able to decrease the temperature by 1', function() {
    thermostat.decreaseTemp(1);
    expect(thermostat.temperature).toEqual(19)
  });

  it("should not be able to go below 10", function(){
    expect( function(){thermostat.decreaseTemp(11)}).toThrow(new Error("Can't lower temperature: trying to go below minimum"))
  });

  it("should not be able to go above 25 when powermode is on", function(){
    expect( function(){thermostat.increaseTemp(6)}).toThrow(new Error("Can't increase temperature: trying to go above maximum"))
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
    expect( function(){thermostat.increaseTemp(13)}).toThrow(new Error("Can't increase temperature: trying to go above maximum"))
  });
});
