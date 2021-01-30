class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
        this.rank=null
        
    }
    getCount(){
        var loc=database.ref("playerCount")
        loc.on("value",function (data){
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({playerCount: count});
    }
    update(){
        var loc="players/player"+ this.index
        database.ref(loc).set({name: this.name,distance: this.distance})
    }
    static getplayerinfo(){
        var loc= database.ref("players")
        loc.on ("value",(data)=>{
            allPlayers=data.val()
        })
    }
    getCarsAtEnd(){
        database.ref("CarsAtEnd").on("value",(data)=>{
            this.rank=data.val()
        })
    }
    static updateCarsAtEnd(rank){
        database.ref("/").update({
            CarsAtEnd: rank
        })

    }
}