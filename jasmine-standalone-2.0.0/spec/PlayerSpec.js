describe("thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20)
  });

  it('starts on power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
  })

  describe('maximum temperature', function(){

    it('is 25 if PSM is on', function(){
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 32 if PSM is off', function(){
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    })

  })

  describe('minimum temperature', function(){
    it('is 10', function(){
      expect(thermostat.minimumTemperature()).toEqual(10);
    })


    it('reduces the temperature if > 10', function(){
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(19);
    })

     
    it('does not reduce the temperature if <=10', function(){
      thermostat.temperature = 10;
      thermostat.cooler();
      expect(thermostat.temperature).toEqual(10);
    })

   })

  // describe('warming temperature', function(){


  describe('power saving mode off', function(){
      beforeEach(function(){
        thermostat.powerSavingMode = false;
      })
      
      it('increases the temperature if < 32', function(){
        thermostat.warmer();
        expect(thermostat.temperature).toEqual(21);
      })


      

  })

})

