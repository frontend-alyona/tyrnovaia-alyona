function PublicService(tariffs) {
    this.tariff = tariffs;
    this.meters ={}; 
 }
     
 PublicService.prototype.addMeterReadings = function (value, key) {
     console.log(Object.keys(tariffs)) 
     if(Object.keys(this.tariff).find((keys) => keys === key)) {
         if(!this.meters[key]){
             this.meters[key] = value;
         } else{
             throw new Error(`Service ${key} is already included`)
         } 
     } else{
         throw new Error(`Service ${key} is unavailable`)
     }
     
     
 };
 PublicService.prototype.deleteMeterReadings = function (key) {
       return delete this.meters[key]
 };
 PublicService.prototype.getSum = function (){
     let result = 0
     for (let key in this.meters){
         let value = this.meters[key]
         result += value * this.tariff[key]
     }
     return result
         
 };
 
 const tariffs = {
     hotWater: 7,
     coldWater: 1,
     gas: 0.3,
     electricity: 1.6,
 }
 
 const service = new PublicService(tariffs); 
 
 service.addMeterReadings(100, "hotWater");
 service.addMeterReadings(200, "coldWater");
 service.deleteMeterReadings("coldWater");
 service.addMeterReadings(300, "electricity");
 // service.addMeterReadings(300, "hhh");        unavailable
 service.addMeterReadings(100, "gas")
 // service.addMeterReadings(100, "gas")         already included
 
 console.log(`service`, service)
 
 
 const res = service.getSum();
 console.log(res);
 