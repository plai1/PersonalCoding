const team = {
  _players : [
    {
      firstName: 'Pablo',
      lastName: 'Sanches',
      age: 11
    },
    {
      firstName: 'Phillip',
      lastName: 'Lai',
      age: 13
    },
    {
      firstName: 'Alex',
      lastName: 'Russo',
      age: 12
    }
  ],
  _games : [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Stallion',
      teamPoints: 36,
      opponentPoints: 42
    },
    {
      opponent: 'Bull',
      teamPoints: 43,
      opponentPoints: 39
    }
  ],

  //getters for players
  get players(){
    return this._players;
  },
  //getters for games
  get games(){
    return this._games;
  },

  //add player
  addPlayer(firstName, lastName, age){
    const player = {firstName: firstName, lastName: lastName, age: age};
    this._players.push(player);
  },

  //add game
  addGame(opponent, teamPoints, opponentPoints){
    const game = {opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints};
    this._games.push(game);
  }
};

//add players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);

//add games
team.addGame('Hawks', 22, 34)
team.addGame('Serpents', 35, 22)
team.addGame('Buffalos', 48, 35)

console.log(team.games) 
