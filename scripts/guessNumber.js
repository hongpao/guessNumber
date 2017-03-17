(function () {
    var guessNumber = null;
    var startNumber = 0;
    var endNumber = 100;
    var btn = document.getElementById("J-btn");
    var guessBtn = document.getElementById("J-guessBtn");
    var num = document.getElementById("J-num");
    btn.addEventListener('click', function () {
        guessNumber = parseInt(Math.random() * 100);
        btn.style.display = "none";
        document.getElementsByClassName("showNumber")[0].innerText = guessNumber;
    });
    guessBtn.addEventListener('click', function () {
        var guessNum = num.value;
        if (guessNum == guessNumber) {
            alert("you win");
        } else if (guessNum < guessNumber && guessNum > startNumber) {
            startNumber = guessNum;
        } else if (guessNum > guessNumber && guessNum < endNumber) {
            endNumber = guessNum;
        } else {
            alert("not range");
            num.value = "";
            return;
        }
        document.getElementsByClassName("range")[0].innerText = startNumber + " - " + endNumber;
        num.value = "";
    });

    var list = document.getElementsByClassName("list")[0];
    for (var i = 1; i < 100; i++) {
        var li = document.createElement("li");
        li.innerText = i;
        list.appendChild(li);
    }
})();