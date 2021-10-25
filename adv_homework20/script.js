function PublicService(options) {
    const {hotWater, coldWater, gas, electricity} = options;
    this.hotWater = hotWater;
    this.coldWater = coldWater;
    this.gas = gas;
    this.electricity = electricity;
   
}



const service = new PublicService({});
PublicService.prototype.addMeterReadings = function (value, key) {
    this[key] = value;
    // ===================================вариант 1 
    if (Object.keys(this).forEach(keys => keys === key)){
        if(this[key] === undefined){
            throw new Error(`Service ${key} is already included`)
        } else{
            throw new Error(`Service ${key} is unavailable`)
    }
    }
    // const tariffs = {
    //     hotWater: 7,
    //     coldWater: 1,
    //     gas: 0.3,
    //     electricity: 1.6,
    // }
    
    // for (let key in tariffs){
    //     console.log("tariffs." + key + " = " + tariffs[key])
    // }
    
    // ======================================вариант 2
    // if ( tariffs[key] !== undefined){
    //     throw new Error(`Service ${key} is already included`)
    // }if ( tariffs[key] === undefined){
    //     throw new Error (`Service ${key} is unavailable`)
    // }

    // if(Object.keys(tariffs).length > 1){
    //     throw new Error(`Service ${key} is already included`)
    // }

    // ======================================вариант 3
    // if (!Object.keys) {
    //     Object.keys = function (tariffs) {
    //         сonst keys = [],
    //             k;
    //         for (k in tariffs) {
    //             if (Object.prototype.hasOwnProperty.call(tariffs, k)) {
    //                 keys.push(k);
    //             }
    //         }
    //         return keys;
    //     };
    // }
};
PublicService.prototype.deleteMeterReadings = function (key) {
  this[key] = undefined;
//   this[key] = 0;
};
PublicService.prototype.getSum = function (){
    let result = 0 ;
    for (let key in this) {
        let value = this[key];
        if(Number(value)){
            result += value;
        }
    }
    return result;
};

service.addMeterReadings(100, "hotWater");
service.addMeterReadings(200, "coldWater");
service.deleteMeterReadings("coldWater");
service.addMeterReadings(300, "electricity");
// service.addMeterReadings(300, "hhh");


console.log(`service`, service)



const res = service.getSum();
console.log(res);
