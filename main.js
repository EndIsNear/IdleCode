var gameData = {
    linesOfCode: 0,
    allTimeLinesOfCode: 0,
    money: 0,
    linePerClick: 1,
    moneyPerLine: 0.5,
    moneyInfoShown: false,
}

function onNewLine() {
    gameData.linesOfCode += gameData.linePerClick;
    gameData.allTimeLinesOfCode += gameData.linePerClick;
    document.getElementById("codeLines").innerHTML = gameData.linesOfCode + " lines coded";
    if (gameData.allTimeLinesOfCode >= 10 && gameData.moneyInfoShown === false) {
        gameData.moneyInfoShown = true;
        showMoneyInfo();
    }
}

function sellCode() {
    if (gameData.linesOfCode >= 1) {
        gameData.money += gameData.linesOfCode * gameData.moneyPerLine;
        gameData.linesOfCode = 0;
        document.getElementById("codeLines").innerHTML = gameData.linesOfCode + " lines coded";
        document.getElementById("money").innerHTML = gameData.money + " $";
    }
}

function showMoneyInfo() {
    var moneyDiv = document.getElementById("moneyInfo");
    if (gameData.moneyInfoShown) {
        moneyDiv.style.display = "block";
    } else {
        moneyDiv.style.display = "none";
    }
}


function onPageLoad() {
    document.getElementById("codeLines").innerHTML = gameData.linesOfCode + " lines coded";
    document.getElementById("money").innerHTML = gameData.money + " $";

    showMoneyInfo();
}

var savegame = JSON.parse(localStorage.getItem("codeIdleGameUselessSave"))
if (savegame !== null) {
    gameData = savegame;
}

var saveGameLoop = window.setInterval(function () {
    localStorage.setItem("codeIdleGameUselessSave", JSON.stringify(gameData));
}, 3000)

onPageLoad();
