function rps(yourchoice) {
    var humanchoice , botchoice;
 humanchoice=yourchoice.id;
 botchoice=number(random());
 console.log(botchoice);
 result = decison(humanchoice,botchoice);
mseg= message(result);
console.log(mseg);
frontend(humanchoice,botchoice,mseg);
}
function random(){
  return  Math.floor(Math.random() * 3);
}
function number(numb){
    return ['rock','paper','scissor'][numb];
}

function decison(humchoice,bochoice){
 var rpsdatabase ={
     'rock':{
         'scissor':1,
         'rock':0.5,
         'paper':0,
     },
     'paper':{
        'scissor':0,
         'rock':1,
         'paper':0.5,
     },
     'scissor':{
        'scissor':0.5,
        'rock':0,
        'paper':1,
     }
 }
 var yourscore =rpsdatabase[humchoice][bochoice];
 var computerscore =rpsdatabase[bochoice][humchoice];
 return [yourscore,computerscore];
}

function message([yourscore,computerscore]){
    if(yourscore === 0){
        return {'msg':'you lost!','color':'red',};
    }else if(yourscore === 0.5){
        return {'msg':'Draw','color':'yellow',};
    }
    else{
        return{'msg':'you win','color':'green',};
    }
}
 
function frontend(yourimagechoice,botimagechoice,message){
    var imgdatabase ={
      'rock': document.getElementById("rock").src,
      'scissor': document.getElementById("scissor").src,
      'paper': document.getElementById("paper").src,
    }
    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    document.getElementById('paper').remove();

    var humandiv =document.createElement("div");
   
    var botdiv =document.createElement("div");
    var mesege= document.createElement("div");

    humandiv.innerHTML="<img src='"+ imgdatabase[yourimagechoice] +"'height=200px width=200px style='box-shadow: 0px 10px 50px rgba(37,50,233,0.7);'>";
    mesege.innerHTML="<h1 style='color:" +message['color']+"'>"+message['msg']+ "</h1>"
    botdiv.innerHTML="<img src='"+ imgdatabase[botimagechoice] +"'height=200px width=200px style='box-shadow: 0px 10px 50px rgba(233,50,37,0.7);'>";

   document.getElementById("flex").appendChild(humandiv);
   document.getElementById("flex").appendChild(mesege);
   document.getElementById("flex").appendChild(botdiv);

    
}