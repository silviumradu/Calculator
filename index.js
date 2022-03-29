/* in prima parte declaram niste constante prin care vom accesa fiecare buton pentru cifre*/
const digit7 = document.querySelector("#digit7");
const digit8 = document.querySelector("#digit8");
const digit9 = document.querySelector("#digit9");

const digit4 = document.querySelector("#digit4");
const digit5 = document.querySelector("#digit5");
const digit6 = document.querySelector("#digit6");

const digit1 = document.querySelector("#digit1");
const digit2 = document.querySelector("#digit2");
const digit3 = document.querySelector("#digit3");
const digit0 = document.querySelector("#digit0");

/* in a doua parte declaram niste constante prin care vom accesa fiecare buton pentru operatii*/
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector('#subtract');
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");

/* result va fi constanta prin care vom accesa divul in care va aparea rezultatul */
const result = document.querySelector(".result");

let firstNumber = 0; //variabila pentru primul termen al operatiei, initial 0
let secondNumber = 0; // variabila pentru al doilea termen al operatiei, initial 0
let operation = ''; // vom folosi variabila ca un id pentru a sti in ce operatie ne referim
let startBuildingSecondNumber = false; //variabila de tip boolean pentru a tine evidenta in ce moment se poate scrie al doilea numar, initial e false deoarece trebuie scris primul numar

/* 
    functia buildNumber construieste numarul prin adaugare de cifre, utilizand modul invatat in primele ore de programare
    se aplica atat pentru primul termen cat si pentru al doilea termen
*/
function buildNumber (digit) {
    if (startBuildingSecondNumber === true) {
        secondNumber = secondNumber * 10 + digit;
        result.innerHTML = secondNumber;
    } else {
        firstNumber = firstNumber * 10 + digit;
        result.innerHTML = firstNumber;
    }
}

function handleMultiplyClick () {
    operation = 'multiply'; //folosim variabila asta ca un fel de id
    startBuildingSecondNumber = true; //in momentul in care se apasa inmultire se retine numarul scris si se poate scrie al doilea termen.
}

function handleSubtractClick () {
    operation = 'subtract';
    startBuildingSecondNumber = true;
}

function handleSumClick () {
    operation = 'sum';
    startBuildingSecondNumber = true;
}

function handleEqualsClick () {
    if (operation === 'multiply') {
        const multiplication = firstNumber * secondNumber;
        result.innerHTML = multiplication;
    } else if (operation === 'subtract') {
        const subtract = firstNumber - secondNumber;
        result.innerHTML = subtract;
    } else if (operation === 'sum') {
        const sum = firstNumber + secondNumber;
        result.innerHTML = sum;
    }

    firstNumber = 0;
    secondNumber = 0;
    operation = '';
    startBuildingSecondNumber = false;
}

// eventuri pentru butoanele cifre, al doilea termen dupa click trebuie sa fie o functie. Pentru usurinta am facut o alta functie in afara eventului, buildNumber()
// numai functia trebuie sa fie doar numele, fara apel, asa ca incercam sa pacalim browserul si creeam o alta functie prin care sa apelam buildNumber, se numeste callback
digit7.addEventListener('click', function () {
    buildNumber(7);
});
digit8.addEventListener('click', function () {
    buildNumber(8);
});
digit9.addEventListener('click', function () {
    buildNumber(9);
});

digit4.addEventListener('click', function () {
    buildNumber(4);
});
digit5.addEventListener('click', function () {
    buildNumber(5);
});
digit6.addEventListener('click', function () {
    buildNumber(6);
});

digit1.addEventListener('click', function () {
    buildNumber(1);
});
digit2.addEventListener('click', function () {
    buildNumber(2);
});
digit3.addEventListener('click', function () {
    buildNumber(3);
});

digit0.addEventListener('click', function () {
    buildNumber(0);
});

// eventurile pentru click-uri
multiply.addEventListener('click', handleMultiplyClick);
subtract.addEventListener('click', handleSubtractClick);
add.addEventListener('click', handleSumClick);
equals.addEventListener('click', handleEqualsClick);