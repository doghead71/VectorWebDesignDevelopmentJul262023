function toggleOne() {
    let div1 = document.getElementById('one');

    if (div1.innerHTML == 'One') {
        div1.innerHTML='1';
    } else {
        div1.innerHTML='One';
    }
}

function toggleTwo() {
    let div2 = document.getElementById('two');

    if (div2.innerHTML == 'Two') {
        div2.innerHTML='2';
    } else {
        div2.innerHTML='Two';
    }
}

function toggleThree() {
    let div3 = document.getElementById('three');

    if (div3.innerHTML == 'Three') {
        div3.innerHTML='3';
    } else {
        div3.innerHTML='Three';
    }
}

function toggleFour() {
    let div4 = document.getElementById('four');

    if (div4.innerHTML == 'Four') {
        div4.innerHTML='4';
    } else {
        div4.innerHTML='Four';
    }
}

function toggleFive() {
    let div5 = document.getElementById('five');

    if (div5.innerHTML == 'Five') {
        div5.innerHTML='5';
    } else {
        div5.innerHTML='Five';
    }
}

function printStars(numStars) {
    let starString = "";
/* loop will execute for values of count 0,1,2....numStars
    count++ is increment operator i.e count = count +1*/
    for(let count = 0; count < numStars; count++) {
        starString = starString.concat("*");
        console.log(starString);
        //alert(starString);
    }
    return starString;
}

function toggle(divId) {
    let divElement = document.getElementById(divId);
    let num = convertIdToNumeric(divId.toLowerCase());

    if(divElement.innerHTML.toLowerCase() == divId.toLowerCase()) {
        divElement.innerHTML = num
        .toString() 
        .concat("(")
        .concat(printStars(num))
        .concat(")");
    } else {
        divElement.innerHTML = divId.toUpperCase();
    }
}

function convertIdToNumeric(id) {
    let num = 0;

    switch(id) {
        case "one": num = 1; break;
        case "two": num = 2; break;
        case "three": num = 3; break;
        case "four": num = 4; break;
        case "five": num = 5; break;
        default: num = 0;
    }
    return num;
}