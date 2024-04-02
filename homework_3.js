/* ---------- ЗАДАНИЕ 3 ----------*/

let emptyObject;

function createEmptyObject(){
    emptyObject = Object.create(null);  // выполнение 2 
    console.log(emptyObject);
};

createEmptyObject();