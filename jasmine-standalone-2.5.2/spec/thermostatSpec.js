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
});
