

var numOne = Math.floor(Math.random() * 20) + 1;
var numTwo = Math.floor(Math.random() * 30) + 1;

var correctAns = numOne + numTwo;

document.getElementById("numberOne").innerHTML = numOne;

document.getElementById("numberTwo").innerHTML = numTwo;


function subAns() {

    var answer = document.getElementById("submitAns").value;

    // isNaN(submitAns);

    if (isNaN(answer)) {
        document.getElementById("submitoutput").innerHTML = '<h4 class="alert alert-danger">Hey, <span class="wrongTxt"> ' + answer + '</span> that is not a number!!</h4>';
        // document.getElementById("submitoutput").innerHTML = 'false';

    } else {
        if (answer == correctAns) {

            document.getElementById("submitoutput").innerHTML = '<h4 class="alert alert-success">Wow <span class="rytNo">' + answer + '</span> is Right Answer!!</h4>';

        } else {

            document.getElementById("submitoutput").innerHTML = '<h4 class="alert alert-warning">Nop, The answer is <span class="rytNo">' + correctAns + '</h4>';

        }
    }

}

function newCard() {

    numOne = Math.floor(Math.random() * 20) + 1;
    numTwo = Math.floor(Math.random() * 20) + 1;

    correctAns = numOne + numTwo;

    document.getElementById("numberOne").innerHTML = numOne;

    document.getElementById("numberTwo").innerHTML = numTwo;

    document.getElementById("submitAns").value = "";
    document.getElementById("submitoutput").innerHTML = " ";
    
}
