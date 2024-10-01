function ticTacToeGame() {
    
        let clicks = [],
        score = 0,
        scoreIncrement = () => score++;
        

    return function (name) {

        return {name, clicks, scoreIncrement, score};
    } 

}

function createGame() {
    let playBtn = document.getElementById('play'),
        inputPlayerName = document.getElementById('me'),
        inputComputerName = document.getElementById('computer'),
        displayPlayer = document.getElementById('my_name_for_game'),
        displayComputer = document.getElementById('computer_name_for_game'),
        myScore = document.getElementById('my_score'),
        enemyScore = document.getElementById('computer_score');

    let createPlayer = ticTacToeGame();
    let player = createPlayer(inputPlayerName.value),
        computer = createPlayer(inputComputerName.value),
        gameboard = [1, 2, 3,
                     4, 5, 6,
                     7, 8, 9];

    let game = {player, computer, gameboard};  

    displayPlayer.innerHTML = player.name;
    displayComputer.innerHTML = computer.name;
    myScore.innerHTML = player.score;
    enemyScore.innerHTML = computer.score;

    inputPlayerName.value = '';
    inputComputerName.value = '';
    
    console.log(game);

    return function extractValues(playerNum) {

        let {player, computer, gameboard} = game,
            {name: playerName, clicks: playerClicks, score: playerScore, scoreIncrement: playerScoreIncrement} = player,
            {name: computerName, clicks: computerClicks, score: computerScore, scoreIncrement: computerScoreIncrement} = computer;
    
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
    
        computer = {name: computerName, clicks: computerClicks, score: computerScore, scoreIncrement: computerScoreIncrement};
        player = {name: playerName, clicks: playerClicks, score: playerScore, scoreIncrement: playerScoreIncrement};
        game = {player, computer, gameboard}
    
        // console.log(player.clicks);
        console.log(playerClicks);
        // console.log(computer.clicks);
        console.log(computerClicks);
        console.log(gameboard);
        console.log(player);
        console.log(computer);
        console.log(game);

        function toClean(arg) {
            arg.score++;
            myScore.innerHTML = arg.score;
            player.clicks = [];
            computer.clicks = []
            game.gameboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            console.log(game);
        }
    
        let toCheck = (array) => {

            let winnerArrs = [[3, 2, 1],[6, 5, 4], [9, 8, 7], [7, 4, 1],[8, 5, 2], [9, 6, 3], [7, 5, 3], [9, 5, 1]],
            winnings = 0,
            defeats = 0;

            for (let item of winnerArrs) {

                for (let i of item) {
                    let [a, b, c] = item;

                
                    if (!array.includes(i)) {
                        defeats++
                        console.log(`defeats = ${defeats}`);
                        // console.log(winnerArrs);
                        break;

                    } else if (array.includes(a) && array.includes(b) && array.includes(c)){
                        winnings++
                        console.log(`winnings = ${winnings}`);
                        break;

                    }
                    break;
                }

            //    break;
            
        }
        console.log(`winnings sum = ${winnings}`)
        console.log(`defeats sum = ${defeats}`)

        // if (winnings > 0) {
        //     console.log(' won!');
        //     toClean();
        // } else if (winnings == 0) {
        //     console.log('You defeated!');
        //     toClean();
        // }

        return winnings;

        };

        if (playerClicks.length > 2) {
            
            let playerCompareArr = playerClicks.sort((a, b) => a - b).reverse();
            let computerCompareArr = computerClicks.sort((a, b) => a - b).reverse();

            let playerResult = toCheck(playerCompareArr);
            let computerResult = toCheck(computerCompareArr);

            if (playerResult >= computerResult) {
                toClean(player);
                console.log('You won!')
            } else if (computerResult > playerResult) {
                toClean(computer);
                console.log('Computer Won!');
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

document.getElementById('play').addEventListener('click', (e) => {
    let field1 = document.getElementById('1'),
        field2 = document.getElementById('2'),
        field3 = document.getElementById('3'),
        field4 = document.getElementById('4'),
        field5 = document.getElementById('5'),
        field6 = document.getElementById('6'),
        field7 = document.getElementById('7'),
        field8 = document.getElementById('8'),
        field9 = document.getElementById('9');
        



    let toPlay = createGame();
 //    letsPlay();

    field1.addEventListener('click', () => {
        toPlay(1);
        field1.classList.add('player_choose');
    })

    field2.addEventListener('click', () => {
        toPlay(2);
        field2.classList.add('player_choose');
    })

    field3.addEventListener('click', () => {
        toPlay(3);
        field3.classList.add('player_choose');
    })

    field4.addEventListener('click', () => {
        toPlay(4);
        field4.classList.add('player_choose');
    })

    field5.addEventListener('click', () => {
        toPlay(5);
        field5.classList.add('player_choose');
    })

    field6.addEventListener('click', () => {
        toPlay(6);
        field6.classList.add('player_choose');

    })

    field7.addEventListener('click', () => {
        toPlay(7);
        field7.classList.add('player_choose');

    })

    field8.addEventListener('click', () => {
        toPlay(8);
        field8.classList.add('player_choose');

    })

    field9.addEventListener('click', () => {
        toPlay(9);
        field9.classList.add('player_choose');

    })

});
