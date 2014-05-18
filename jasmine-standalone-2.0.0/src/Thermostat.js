function Thermostat() {
	this.temperature = 20;
	this.powerSavingMode = true;
}

Thermostat.prototype.maximumTemperature = function() {
	if(this.powerSavingMode) return 25;
	return 32
};

Thermostat.prototype.minimumTemperature = function() {
	return 10;
};

Thermostat.prototype.cooler = function() {
	if(this.temperature <= this.minimumTemperature()) return false
	this.temperature -=1;	// body...
};

Thermostat.prototype.warmer = function() {
	if(this.temperature >= this.maximumTemperature()) return false 
	this.temperature +=1;
	// body...
};