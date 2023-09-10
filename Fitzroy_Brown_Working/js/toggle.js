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
/* loop will execute for values of count 0,1,2....numStars*/
    for(let count = 0; count < numStars; count++) {
        starString = starString.concat("+");
        console.log(starString);
        alert(starString);
    }
    return starString;
}

