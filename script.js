/*var http = require("http");

http
  .createServer(function (req, res) {
    res.end("Let's Design And Develop the Future together");
  })
  .listen(9000);*/


  var second =00;
  var ten = 00;
  var appendTens = document.getElementById("ten");
  var appendSeconds = document.getElementById("second");
  var buttonStart= document.getElementById("button-start");
  var buttonStop= document.getElementById("button-stop");
  var buttonResume= document.getElementById("button-resume");

  var interval;  //to store time value

  //this function will run when click on start

  function startTimer(){
      ten++;

      if(ten<9){
          appendTens.innerHTML="0"+ ten;

      }
      if(ten>9){
          appendTens.innerHTML=ten;
     }
     if(ten>99)
     {

        second++;
        appendSeconds.innerHTML ="0"+second;
        ten=0;
        appendTens.innerHTML ="0"+ 0;
     }

     if(second>9){
         appendSeconds.innerHTML =second;
     }

  }

  buttonStart.onclick =function(){
      interval =setInterval(startTimer);

  };

  buttonStop.onclick =function(){
    clearInterval(interval);

};

buttonResume.onclick =function(){
    clearInterval(interval);
    ten ="00";
    second= "00";
    appendSeconds.innerHTML =second;
    appendTens.innerHTML =ten;

};

