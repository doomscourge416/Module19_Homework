// Общая категория

const HouseholdItem = {
    Adress: 'Moscow, Gagarina st., 77'
};

// Подкатегория (электроприборы)

const ElectricalGadjet = {
    Wifi: 'TP-Link7577',
    pluggedIn: false,
    plugIn: function(){
        this.pluggedIn = true;
        console.log(this.name, 'is plugged in.')
    },
    plugOut: function(){
        this.pluggedIn = false;
        console.log(this.name, 'is plugged out.')
    },
    __proto__: HouseholdItem
};



// Разветвление 1 (карманные гаджеты)

function PocketGadjets(name, model, chargeType, voltage, internetConnection, room){
    this.name = name,
    this.model = model,
    this.chargeType = chargeType,
    this.voltage = voltage,
    this.internetConnection = internetConnection,
    this.room = room
};

// Разветвление 2 (недвижимые гаджеты)

function StationaryGadjets(name, model, sizings, voltage, internetConnection, room){
    this.name = name,
    this.model = model,
    this.sizings = sizings,
    this.voltage = voltage,
    this.internetConnection = internetConnection,
    this.room = room
};

// Указывает прототипное наследование

PocketGadjets.prototype = ElectricalGadjet;
StationaryGadjets.prototype = ElectricalGadjet;


// Создаем предметы техники

const iPhone = new PocketGadjets('iPhone', '11 Pro', 'USB', 1000, 'Wifi/Sim', 'n/a');
const tv = new StationaryGadjets('LG', 'D9X', '200x75', 2500, 'Wifi', 'Bedroom');
const dishwasher = new StationaryGadjets('Haier', 'ZX880', '100x100x100', 4400, 'Wifi', 'Bathroom')


console.log(iPhone); //Проверяем
console.log(tv); //Проверяем
console.log(dishwasher); //Проверяем

// console.log(iPhone.Adress, iPhone.Wifi, tv.Adress, tv.Wifi); // Проверка того, что iPhone и tv наследуют свойства Adress и Wifi от ElectricalGadjet и HouseholdItem

// Подключаем их к питанию

iPhone.plugIn();
tv.plugIn();
dishwasher.plugIn();

// iPhone.plugOut();
// tv.plugOut();
// dishwasher.plugOut();

// iPhone.plugIn();

// Функция для подсчета суммы энергопотребления приборов
function calculateVoltage(...arguments){
        return arguments.reduce((acc, next) => {
                let sum = acc + next; 
                return sum
            })
        };

// Подставляем значения энергопотребления приборов в функцию
let voltageSum = calculateVoltage(iPhone.voltage, tv.voltage, dishwasher.voltage);
if(voltageSum !== undefined){
    console.log(voltageSum + ' amp. overall')
};

