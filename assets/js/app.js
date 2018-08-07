

function checkResult() {
    var sum = 0;
    ans1 = document.getElementById("opt2")
    ans2 = document.getElementById("opt4")
    ans3 = document.getElementById("opt8")
    ans4 = document.getElementById("opt10")

    //question1; 
    if (ans1.checked == true) {
        sum++;
        document.getElementById('question01').innerHTML += '&#10004';
    }else{
        document.getElementById('question01').innerHTML += '&#10006';
    }

    //question2; 
    if (ans2.checked == true) {
        sum++;
        document.getElementById('question02').innerHTML += '&#10004';
    }else{
        document.getElementById('question02').innerHTML += '&#10006';
    }
    //question3; 
    if (ans3.checked == true) {
        sum++;
        document.getElementById('question03').innerHTML += '&#10004';
    }else{
        document.getElementById('question03').innerHTML += '&#10006';
    }
    //question4; 
    if (ans4.checked == true) {
        sum++;
        document.getElementById('question04').innerHTML += '&#10004';
    }else{
        document.getElementById('question04').innerHTML += '&#10006';
    }


    var percentage = sum * 100 / 4;

    document.getElementById("score").innerHTML = "Score : " + sum;

    document.getElementById("percent").innerHTML = percentage + "%";

    document.getElementById("resultArea").style.backgroundColor = "#e9ecef";

    if (percentage < 50) {
        document.getElementById("percent").style.color = "red";
    }else{
        document.getElementById("percent").style.color = "green";
    }
    if (percentage === 100) {
        document.getElementById("percent").innerHTML = "Wow " + percentage + "%    Well Done !!";
    }





}

