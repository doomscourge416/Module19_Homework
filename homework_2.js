/* ---------- ЗАДАНИЕ 2 ----------*/

const prototypeObject = {
    objectType: "Prototype",
}

const referenceObject = Object.create(prototypeObject);

referenceObject.a = 1;
referenceObject.b = 3;
referenceObject.c = 3;
referenceObject.d = 7;

function stringInObject (string, obj){

    if(string in obj){
        console.log(true);
        return true
    } else {
        console.log(false);
        return false
    }
};

stringInObject("d", referenceObject); // true
stringInObject("objectType", referenceObject); // true

stringInObject(3, referenceObject); // false
stringInObject("asdasd", referenceObject); // false