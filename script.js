// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model);
	this.topSpeed=topSpeed;
}
// class Car{
// 	constructor(make,model){
// 		this.make=make;
// 		this.model=model;
// 	}
	
// }
Car.prototype.getMakeModel=function(){
		return "`${make}` `${model}`"
	}
// class SportsCar extends Car{
// 	constructor(make,model,topSpeed){
// 		super(make,model);
// 		this.topSpeed=topSpeed;
// 	}
// }
SuperCar.prototype.getTopSpeed=function(){
		return this.topSpeed;
	}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
