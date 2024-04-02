// Общая категория

class ElectricalGadjet {

    constructor(adress, wifi){
        this.adress = adress || 'Moscow, Gagarina st., 77';
        this.wifi = wifi || 'TP-Link7577'
    }

    /*static*/plugIn(){
        this.pluggedIn = true;
        console.log(this.name, 'is plugged in.')
    }

    /*static*/plugOut(){
        this.pluggedIn = false;
        console.log(this.name, 'is plugged out.')
    }

};

// Первая подкатегория - карманные гаджеты

class PocketGadjets extends ElectricalGadjet {

    constructor(name, model, chargeType, voltage, internetConnection, room, adress, Wifi){
        super(adress, Wifi),
        this.name = name,
        this.model = model,
        this.chargeType = chargeType,
        this.voltage = voltage,
        this.internetConnection = internetConnection,
        this.room = room
    }

    
};

// Вторая подкатегория - станционарные гаджеты

class StationaryGadjets extends ElectricalGadjet{

    constructor(name, model, sizings, voltage, internetConnection, room, adress, Wifi){
        super(adress, Wifi),
        this.name = name,
        this.model = model,
        this.sizings = sizings,
        this.voltage = voltage,
        this.internetConnection = internetConnection,
        this.room = room
    }
    
};

// Создаем устройства техники

const iPhone = new PocketGadjets('iPhone', '11 Pro', 'USB', 1000, 'Wifi/Sim', 'n/a'/* сюда можно добавить еще adress и wifi */);
const tv = new StationaryGadjets('LG', 'D9X', '200x75', 2500, 'Wifi', 'Bedroom');
const dishwasher = new StationaryGadjets('Haier', 'ZX880', '100x100x100', 4400, 'Wifi', 'Bathroom');

// подключаем устройства в розетку
iPhone.plugIn();
tv.plugIn();
dishwasher.plugIn();

// Выводим устройства в консоль

console.log(iPhone);
console.log(tv);
console.log(dishwasher);

// Функция подсчета общего энергопотребления

function calculateVoltage(...arguments){
    return arguments.reduce((acc, next) => {
        let sum = acc + next; 
        // console.log('Overall voltage is ' + sum + ' amp.')
        return sum
    })
};

// Выводим в консоль общее энергопотребление

console.log('Overall voltage is ' + calculateVoltage(iPhone.voltage, tv.voltage, dishwasher.voltage) + ' amp.');
