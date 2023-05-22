let defaultWin = 3,
    defaultDraw = 1,
    defaultLoss = 0;

function footballPoints(wins, draws, losses) {
    return defaultWin * wins + defaultDraw * draws + defaultLoss * losses;
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2)); 
console.log(footballPoints(0, 0, 1));


