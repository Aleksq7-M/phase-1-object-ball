//big nasty nested object
function gameObject(){
    const obj = {
        home: {
            teamName:'Brooklyn Nets',
            colors:['Black', 'White'],
            players:{
                'Alan Anderson':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                },
                'Reggie Evans':{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                'Brook Lopez':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15
                },
                'Mason Plumlee':{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                'Jason Terry':{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
            },
        },
        away:{
            teamName:'Charlotte Hornets',
            colors:['Turquoise', 'Purple'],
            players:{
                'Jeff Adrien':{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2
                },
                'Bismak Biyombo':{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
                },
                'DeSagna Diop':{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
                },
                'Ben Gordon':{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                'Brendan Haywood':{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
                }
            },
        }
    }
    return obj;
}

function numPointsScored(name='Alan Anderson'){
    let game = gameObject();
    let result = '';
    for (let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            if (typeof teamInfo === 'object'){
                for (person in teamInfo){
                    if (person === name){
                        let player = teamInfo[person];
                        result += player.points;
                    }
                }
            }
        }
    }
    return result;
}

function statFinder(name, stat){
    let game = gameObject();
    let result = '';
    for (let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            if (typeof teamInfo === 'object'){
                for (person in teamInfo){
                    if (person === name){
                        let player = teamInfo[person];
                        result += player[stat];
                    }
                }
            }
        }
    }
    return result;
}

function shoeSize(name='Alan Anderson'){
    let game = gameObject();
    let result = '';
    for (let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            if (typeof teamInfo === 'object'){
                for (let person in teamInfo){
                    if (person === name){
                        let player = teamInfo[person];
                        result += player.shoe;
                    }
                }
            }
        }
    }
    return result;
}

function teamColors(teamName='Brooklyn Nets'){
    debugger;
    let game = gameObject();
    let result = [];
    for (let team in game){
        let teamKeys = game[team];
        if (teamKeys.teamName === teamName){
            result = [...teamKeys.colors]
        }
    }
    return result;
}

function teamNames(){
    let game = gameObject();
    let result = [];
    for (let team in game){
        let teamKeys = game[team];
        result.push(teamKeys.teamName);
    }
    return result;
}

function playerNumbers(teamName='Brooklyn Nets'){
    let game = gameObject();
    let result = [];
    for (let team in game){
        let teamKeys = game[team];
        if (teamKeys.teamName === teamName){
            for (let names in teamKeys.players){
                result.push(names[number]);
            }
        }
    }
}

function playerStats(name='Ben Gordon'){
    let game = gameObject();
    let result = {};
    for (let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            if (typeof teamInfo === 'object'){
                for (let person in teamInfo){
                    if (person === name){
                        let player = teamInfo[person];
                        Object.assign(result, player);
                    }
                }
            }
        }
    }
    return result;
}

function bigShoeRebounds(){
    let game = gameObject();
    let bigShoe=0;
    let result= '';
    for(let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            for (let person in teamInfo){
                let player = teamInfo[person];
                if (player.shoe > bigShoe){
                    bigShoe = player.shoe;
                    result = person;
                }
            }
        }
    }
    return `Largest Shoes: ${result}, Rebounds: ${statFinder(result, 'rebounds')}`;
}

function mostPointsScored(){
    let game = gameObject();
    let highScore=0;
    let result= '';
    for(let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            for (let person in teamInfo){
                let player = teamInfo[person];
                if (player.points > highScore){
                    highScore = player.points;
                    result = person;
                }
            }
        }
    }
    return result;
} 
function mostX(stat){//generalized from mostPointsScored()
    let game = gameObject();
    let highStat=0;
    let result= '';
    for(let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            let teamInfo = teamKeys[info];
            for (let person in teamInfo){
                let player = teamInfo[person];
                if (player[stat] > highStat){
                    highStat = player[stat];
                    result = person;
                }
            }
        }
    }
    return result;
}

function winningTeam(){
    let game = gameObject();
    let teamScores = []
    let winner = '';
    for (let team in game){
        let totalScore = 0;
        let teamKeys = game[team];
        for (let info in teamKeys){
            if(info === 'players'){
                debugger;
                let teamInfo = teamKeys[info];
                for (let person in teamInfo){
                    let playerName = teamInfo[person]
                    totalScore += playerName.points
                }                    
            }
        }
        teamScores.push(totalScore);
    }
    if (teamScores[0] > teamScores[1]){
        winner = 'Brooklyn Nets';
    } else {
        winner = 'Charlotte Hornets'
    }
    return winner;
}

// function playerWithLongestName(){
//     let game = gameObject();
//     let result = '';
//     for (let team in game){
//         let teamKeys = game[team];
//         for (let info in teamKeys){
//             if (info === 'players')
//                 let infoKeys = teamKeys[info];
//                 for (let names in infoKeys){
//                     if (names.length > result){
//                         result = names;
//                 }
//             }
//         }

//     }
// }

function playerWithLongestName(){
    let game = gameObject();
    let result = '';
    for (let team in game){
        let teamKeys = game[team];
        for (let info in teamKeys){
            if (info === 'players'){
                let infoKeys = teamKeys[info];
                for (let names in infoKeys){
                    if (names.length > result.length){
                        result = names;
                    }
                }
            }

        }
    }
    return result;
}

function doesLongNameStealATon(){
    let playerName = playerWithLongestName();
    let mostSteals = mostX('steals');

    if (playerName = mostSteals){
        return true;
    }else{
        return false;
    }

}