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

       return {player, computer, gameboard};     

}

let game = createGame('Nick', 'Computer'); // try to desctructure it 



function extractForPlayer(num) {

    

    // if (game.player.clicks.length > 2) {
        // if (game.player.clicks.slice(game.player.clicks.length - 3, game.player.clicks.length)) 
            // to use sort() and reduce() methods to create conditions for +1,+2,+3, +4 wins
    // }
    
    let extractVal = game.gameboard.filter(i => i == num);
    game.gameboard = game.gameboard.filter(i => i != num);
    game.player.clicks = game.player.clicks.concat(extractVal);
    // game.player.clicks = 
    // game.player.clicks = game.player.clicks.push(extractVal);


    console.log(game.player.clicks);
    console.log(game.gameboard);
}

