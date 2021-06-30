class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
     question.hide();
    //write code to change the background color here
     background("orange");
     fill(0);
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("RESULT",120,100);
    //call getContestantInfo( ) here
       Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allPlayers!==undefined){
      debugger;
      var displayanswer=230;
      fill("orange");
      textSize(15);
      text("NOTE:Contestent with correct ans will highlighted with green colour",130,200);
      for(var plr in allContestents){
        debugger;
        var correctAns="2";
        if(correctAns===allContestents[plr].answer)
        fill("green")
        else
        fill("red");

        displayanswer+=30;
        textSize(20);
        text(allContestents[plr].name + ":" + allContestents[plr].answer,250,displayanswer)
      }
    }
    
  }

  }
