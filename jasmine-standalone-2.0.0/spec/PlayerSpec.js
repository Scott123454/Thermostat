describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermstat();
  });
});

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  })

  it('starts on power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  })

  describe('maximum temperature', function(){
    it('is 25 if PSM is on', function(){
      expect(thermostat.maximumTemperature()).toEqual(true);
    })
  })