var playerNameOptions = ["zidane", "vieira", "ronaldo", "romario", "owen", "rivaldo", "ronaldinho", "pirlo", "iniesta", "ozil"]
var nationalityClue = ["French", "French", "Brazilian", "Brazilian", "English", "Brazilian", "Brazilian", "Italian", "Spanish", "German"]
var playerNamePic = ["Zinedine Zidane", "Patrick Viera", "Ronaldo Nazario", "Romario", "Michael Owen", "Rivaldo", "Ronaldinho", "Andrea Pirlo", "Andres Iniesta", "Mesut Ozil"]
var playerPicture = ["../Word-Guess-Game/assets/images/zidane.jpg", "../Word-Guess-Game/assets/images/vieira.jpg", "../Word-Guess-Game/assets/images/ronaldo.jpg", "../Word-Guess-Game/assets/images/romario.jpg", "../Word-Guess-Game/assets/images/Owen.jpg", "../Word-Guess-Game/assets/images/rivaldo.jpg", "../Word-Guess-Game/assets/images/ronaldinho.jpg", "../Word-Guess-Game/assets/images/pirlo.jpg", "../Word-Guess-Game/assets/images/iniesta.jpg", "../Word-Guess-Game/assets/images/ozil.jpg"]
var playerVid =["https://www.youtube.com/embed/n4eqEwB3JZs?mute=1", "https://www.youtube.com/embed/vdnSHfMAhDo?mute=1", "https://www.youtube.com/embed/PYLeAQk8KVI?mute=1", "https://www.youtube.com/embed/-45m_DJJ_UY?mute=1", "https://www.youtube.com/embed/CcJO2IkiJcw?mute=1", "https://www.youtube.com/embed/ux7hADEevg0?mute=1", "https://www.youtube.com/embed/h7O4z5xX2wI?mute=1", "https://www.youtube.com/embed/eUg9Sx28MlA?mute=1", "https://www.youtube.com/embed/xvRuG-5-SQ0?mute=1", "https://www.youtube.com/embed/4D15H4YuM64?mute=1"]
var selectedName = "";
var selectedClue = "";
var lettersInName = [];
var dashesLength = 0;
var userGuess;
var dashAndLetters = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;



function startGame() {
    indexChosen = [Math.floor(Math.random() * playerNameOptions.length)];
    selectedName = playerNameOptions[indexChosen];
    selectedClue = nationalityClue[indexChosen];
    selectedPicture = playerPicture[indexChosen];
    selectedNamePic = playerNamePic[indexChosen];
    selectedVid = playerVid[indexChosen];
    lettersInName = selectedName.split("");
    dashesLength = lettersInName.length;

    guessesLeft = 9;
    wrongLetters = [];
    dashAndLetters = [];

    for (var i = 0; i < dashesLength; i++) {
        dashAndLetters.push("_");
    }

    document.getElementById("nameToBeGuessed").innerHTML = dashAndLetters.join(" ");
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongLetterGuesses").innerHTML = wrongLetters;
    document.getElementById("winsHtml").innerHtml = winCount;
    document.getElementById("losses").innerHTML = lossCount;
    document.getElementById("clueOfNationality").innerHTML = selectedClue;



}

function checkGuess(userGuess) {

    var correctLetterGuessCheck = false;

    for (var i = 0; i < dashesLength; i++) {
        if (selectedName[i] == userGuess) {
            correctLetterGuessCheck = true;


        }
    }
    if (correctLetterGuessCheck == true) {
        for (var i = 0; i < dashesLength; i++) {
            if (selectedName[i] == userGuess) {
                dashAndLetters[i] = userGuess;
                document.getElementById("nameToBeGuessed").innerHTML = dashAndLetters.join(" ");
            }
        }
    }
    else {

        wrongLetters.push(userGuess);
        guessesLeft--;
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
        document.getElementById("wrongLetterGuesses").innerHTML = wrongLetters;

    }


}

function endOfRound() {
    if (lettersInName.toString() == dashAndLetters.toString()) {
        winCount++;
        document.getElementById("winsHtml").innerHTML = winCount;
        document.getElementById("selectPlayerPic").setAttribute("src", selectedPicture);
        document.getElementById("playerNameBio").innerHTML = selectedNamePic;
        document.getElementById("selectPlayerVid").setAttribute("src", selectedVid);
        startGame();
    }

    else if (guessesLeft == 0) {
        lossCount++;
        document.getElementById("losses").innerHTML = lossCount;
        startGame();
    }
}

startGame();

document.onkeyup = function (event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkGuess(userGuess);
    endOfRound();

}
