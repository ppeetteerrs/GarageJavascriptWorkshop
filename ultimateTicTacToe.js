/* 
    Game Input
        Input for one game turn

            Line 1: 2 space separated integers opponentRow and opponentCol, the opponent's last action (-1 -1 for the first turn). 

            Line 2: the number of valid actions for this turn, validActionCount. 

            Next validActionCount lines: 2 space separated integers row and col, the coordinates you're allowed to play at.

        Output for one game turn

            Line 1: 2 space separated integers row and col.
 */

let gameMap = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

while (true) {
    let inputs = readline().split(' ');
    const opponentRow = parseInt(inputs[0]);
    const opponentCol = parseInt(inputs[1]);

    if (opponentRow >= 0 && opponentCol >= 0) {
        gameMap[opponentRow][opponentCol] = -1;
    }

    const validActionCount = parseInt(readline());

    let moveArray = []

    for (let i = 0; i < validActionCount; i++) {
        let actionInputs = readline().split(' ');
        const row = parseInt(actionInputs[0]);
        const col = parseInt(actionInputs[1]);
        let score = evaluateMove(gameMap, row, col, i);
        moveArray[i] = {
            move: [row, col],
            score
        };
    }

    moveArray.sort((move1, move2) => move2.score - move1.score);

    let bestMove = moveArray[0].move;
    
    gameMap[bestMove[0]][bestMove[1]] = 1;

    print(`${bestMove[0]} ${bestMove[1]}`);
}

function evaluateMove(currentMap, row, col, index) {
    return index;
}