class Game{
    constructor(){

    }
    getState(){
        var loc= database.ref("gameState")
        loc.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            form=new Form()
            player=new Player()
            player.getCount()
            form.display()
        }
        car1=createSprite(100,200)
        car1.addImage("car1",car1Image)
        car2=createSprite(300,200)
        car2.addImage("car2",car2Image)
        car3=createSprite(500,200)
        car3.addImage("car3",car3Image)
        car4=createSprite(700,200)
        car4.addImage("car4",car4Image)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
       // textSize(30)
        //text("Game Start",120,100)

        Player.getplayerinfo()
        player.getCarsAtEnd()
        if(allPlayers!==undefined){
          background("brown")
          image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
            var x=175
            var y
           // var display_position=130
            for(var i in allPlayers){
                index=index+1
                x=x+200
                y=displayHeight-allPlayers[i].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index === player.index){
                    stroke(10)
                    fill("red")
                    ellipse(x,y,60,60)
                cars[index-1].shapeColor="red"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
                }
                else{
                    cars[index-1].shapeColor="black"
                }
               
            }
        }
        if(keyIsDown(UP_ARROW )&& player.index !== null){
            player.distance+=20
            player.update()

        }
        if(player.distance>3860){
            gameState=2
            player.rank=player.rank+1
            Player.updateCarsAtEnd(player.rank)
        }
        drawSprites()
    }
    end(){
        console.log("game ended")
        console.log(player.rank)
    }
}