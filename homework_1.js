/* ---------- ЗАДАНИЕ 1 ----------*/

const prototypeObject = {
    objectType: "Prototype", // Создаем прототип объекта со своим значением, чтобы проверить, что функция не захватывает его ключей
}

const referenceObject = Object.create(prototypeObject);

referenceObject.a = 1;
referenceObject.b = 3;
referenceObject.c = 3;
referenceObject.d = 7;

function allKeysValues(obj){
    for (let key in obj){

        if(obj.hasOwnProperty(key)){
            console.log(key,':', obj[key]); // Вывод всех своих ключей и свойств
            //console.log(key);  // Вывод всех своих ключей
            //console.log(obj[key]); // Вывод всех своих свойств
        }
        
    }
};

allKeysValues(referenceObject);

// console.log(referenceObject);