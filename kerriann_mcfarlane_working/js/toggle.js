function toggleFive() {
    let div5 = document.getElementById('Five')

    if (div5.innerHTML == 'Five') {
        //do action if condition true
        div5.innerHTML = '5';
    } else {//condition is false
        //do action if condition false
        div5.innerHTML = 'Five';
    }
}



function toggleOne() {
    let div1 = document.getElementById('One')

    if (div1.innerHTML == 'One') {
        //do action if condition true
        div1.innerHTML = '1';
    } else {//condition is false
        //do action if condition false
        div5.innerHTML = 'One';
    }
}


function toggleTwo() {
    let div2 = document.getElementById('Two')

    if (div2.innerHTML == 'Two') {
        //do action if condition true
        div2.innerHTML = '2';
    } else {//condition is false
        //do action if condition false
        div2.innerHTML = 'Two';
    }
}


function toggleFour() {
    let div4 = document.getElementById('Four')

    if (div4.innerHTML == 'Four') {
        //do action if condition true
        div4.innerHTML = '4';
    } else {//condition is false
        //do action if condition false
        div4.innerHTML = 'Four';
    }
}


function printStars(numStars) {
    let starString = "";
    /*
    loop will execute for count 0,1,2, .... numStars
    count++ is increment operator i.e. count = count + 1
    */
    for (let count = 0; count < numStars; count++) {
        starString = starString.concat("*");
        console.log(starString);
        //alert(starString);
    }
    return starString;
}

function toggle(divId) {
    let divElement = document.getElementById(divId);
    let num = convertIdTonumeric(divId.toLowerCase());

    if (divElement.innerHTML.toLowerCase() == divId.toLowerCase()) {
        divElement.innerHTML = num
            .toString()
            .concat("(")
            .concat(printStars(num))
            .concat(")");
    } else {
        divElement.innerHTML = divId.toUpperCase();

    }

}

function convertIdTonumeric(id) {
    let num = 0;

    switch (id) {
        case "one":
            num = 1;
            break;
        case "two":
            num = 2;
            break;
        case "three":
            num = 3;
            break;
        case "four":
            num = 4;
            break;
        case "five":
            num = 5;
            break;
        default:
            num = 0;

    }
return num;
}




