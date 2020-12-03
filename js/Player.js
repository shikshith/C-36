class Player {
  constructor(){
    this.index = null;
    this.distance=0;
    this.name=null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
// update the player details in the database, all the players are inside"players"
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  // read the information about all the players from the database
  // static function=does not involve any perticular object, hence called by class name itself and not the object
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers=data.val();
    })
  }
}
