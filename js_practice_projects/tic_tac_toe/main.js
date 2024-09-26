function ticTacToeGame() {
    
        let clicks = [],
        score = 0,
        scoreIncrement = () => score++;
        

    return function (name) {

        return {name, clicks, scoreIncrement};
    } 

}

function createGame(name1, name2) {
    let createPlayer = ticTacToeGame();
    let player = createPlayer(name1),
        computer = createPlayer(name2),
        gameboard = [1, 2, 3,
                     4, 5, 6,
                     7, 8, 9];

    let game = {player, computer, gameboard};    

    return function extractValues(playerNum) {

        let {player, computer, gameboard} = game,
            {name: playerName, clicks: playerClicks, scoreIncrement: playerScoreIncrement} = player,
            {name: computerName, clicks: computerClicks, scoreIncrement: computerScoreIncrement} = computer;
    
        let playerExtractVal = gameboard.filter(i => i == playerNum);
        gameboard = gameboard.filter(i => i != playerNum);
    
        let computerNum = Math.floor(Math.random() * (gameboard.length - 1) + 1),
            computerExtractVal = gameboard.filter(i => i == gameboard[computerNum])
            gameboard = gameboard.filter(i => i != gameboard[computerNum]);
    
        playerClicks = player.clicks.concat(playerExtractVal);
        computerClicks = computer.clicks.concat(computerExtractVal);
        // cons
        // console.log(extractVal);
        // game.player.clicks = game.player.clicks.concat(extractVal);
        // game.player.clicks = 
        // game.player.clicks = game.player.clicks.push(extractVal);
    
        computer = {name: computerName, clicks: computerClicks, scoreIncrement: computerScoreIncrement};
        player = {name: playerName, clicks: playerClicks, scoreIncrement: playerScoreIncrement};
        game = {player, computer, gameboard}
    
        // console.log(player.clicks);
        console.log(playerClicks);
        // console.log(computer.clicks);
        console.log(computerClicks);
        console.log(gameboard);
        console.log(player);
        console.log(computer);
        console.log(game);
    
        
        if (playerClicks.length > 2) {
            if (playerClicks.slice(playerClicks.length - 3, playerClicks.length)) {
                playerClicks.sort((a, b) => a - b);
                computerClicks.sort((a, b) => a - b);  // think about sorting and condition. it can be backware order for winning
    
                if (playerClicks.reduce((a, b) => a + 1) == playerClicks[playerClicks.length - 1] ||
                    playerClicks.reduce((a, b) => a + 2) == playerClicks[playerClicks.length - 1] ||
                    playerClicks.reduce((a, b) => a + 3) == playerClicks[playerClicks.length - 1] ||
                    playerClicks.reduce((a, b) => a + 4) == playerClicks[playerClicks.length - 1]) {
                        return 'You won!'
                } else if (
                    computerClicks.reduce((a, b) => a + 1) == computerClicks[computerClicks.length - 1] ||
                    computerClicks.reduce((a, b) => a + 2) == computerClicks[computerClicks.length - 1] ||
                    computerClicks.reduce((a, b) => a + 3) == computerClicks[computerClicks.length - 1] ||
                    computerClicks.reduce((a, b) => a + 4) == computerClicks[computerClicks.length - 1]
                    ) {
                        return 'Computer Won!'
                }
            }
    
                // to use sort() and reduce() methods to create conditions for +1,+2,+3, +4 wins
        } 
        
    }
    

}

// let game = createGame('Nick', 'Computer'); // try to desctructure it 



// function extractValues(playerNum) {

//     let {player, computer, gameboard} = game,
//         {name: playerName, clicks: playerClicks, scoreIncrement: playerScoreIncrement} = player,
//         {name: computerName, clicks: computerClicks, scoreIncrement: computerScoreIncrement} = computer;

//     let playerExtractVal = gameboard.filter(i => i == playerNum);
//     gameboard = gameboard.filter(i => i != playerNum);

//     let computerNum = Math.floor(Math.random() * (gameboard.length - 1) + 1),
//         computerExtractVal = gameboard.filter(i => i == gameboard[computerNum])
//         gameboard = gameboard.filter(i => i != gameboard[computerNum]);

//     playerClicks = player.clicks.concat(playerExtractVal);
//     computerClicks = computer.clicks.concat(computerExtractVal);
//     // cons
//     // console.log(extractVal);
//     // game.player.clicks = game.player.clicks.concat(extractVal);
//     // game.player.clicks = 
//     // game.player.clicks = game.player.clicks.push(extractVal);

//     computer = {name: computerName, clicks: computerClicks, scoreIncrement: computerScoreIncrement};
//     player = {name: playerName, clicks: playerClicks, scoreIncrement: playerScoreIncrement};
//     game = {player, computer, gameboard}

//     // console.log(player.clicks);
//     console.log(playerClicks);
//     // console.log(computer.clicks);
//     console.log(computerClicks);
//     console.log(gameboard);
//     console.log(player);
//     console.log(computer);
//     console.log(game);

    
//     if (playerClicks.length > 2) {
//         if (playerClicks.slice(playerClicks.length - 3, playerClicks.length)) {
//             playerClicks.sort((a, b) => a - b);
//             computerClicks.sort((a, b) => a - b);  // think about sorting and condition. it can be backware order for winning

//             if (playerClicks.reduce((a, b) => a + 1) == playerClicks[playerClicks.length - 1] ||
//                 playerClicks.reduce((a, b) => a + 2) == playerClicks[playerClicks.length - 1] ||
//                 playerClicks.reduce((a, b) => a + 3) == playerClicks[playerClicks.length - 1] ||
//                 playerClicks.reduce((a, b) => a + 4) == playerClicks[playerClicks.length - 1]) {
//                     return 'You won!'
//             } else if (
//                 computerClicks.reduce((a, b) => a + 1) == computerClicks[computerClicks.length - 1] ||
//                 computerClicks.reduce((a, b) => a + 2) == computerClicks[computerClicks.length - 1] ||
//                 computerClicks.reduce((a, b) => a + 3) == computerClicks[computerClicks.length - 1] ||
//                 computerClicks.reduce((a, b) => a + 4) == computerClicks[computerClicks.length - 1]
//                 ) {
//                     return 'Computer Won!'
//             }
//         }

//             // to use sort() and reduce() methods to create conditions for +1,+2,+3, +4 wins
//     } 
    
// }

