// alert("Hello world")

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let leadScore = document.getElementById("lead-score");
let hCount = 0;
let gCount = 0;

function hscoreOne(){
    hCount += 1;
    homeScore.textContent = hCount;
}

function hscoreTwo(){
    hCount += 2;
    homeScore.textContent = hCount;
}

function hscoreThree(){
    hCount += 3;
    homeScore.textContent = hCount;
}

// Guest Score
function gscoreOne(){
    gCount += 1;
    guestScore.textContent = gCount;
}

function gscoreTwo(){
    gCount += 2;
    guestScore.textContent = gCount;
}

function gscoreThree(){
    gCount += 3;
    guestScore.textContent = gCount;
}


// Lead Score
function leadScorer()
{
    if(hCount > gCount){
        leadScore.textContent = 'Home is leading.';
    }else if(hCount == gCount){
        leadScore.textContent = 'Score is Equal';
    }
    else{
        leadScore.textContent = 'Guest is leading.'
    }
}

// New Game
function newGame()
{
    gCount = 0;
    hCount = 0;
    guestScore.textContent = gCount;
    homeScore.textContent = hCount;
}