let [milliseconds,seconds,minutes] = [0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
    
});



function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
           
        }
    }
    
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${m} : ${s} : ${ms}`;


      
}

function wordCount() {
    var text = document.querySelector(".inputpara").value;
    var count = 0;
    var split = text.split(' ');
    for (var i = 0; i < split.length; i++) {
     if (split[i] != "") {
      count ++;
     }
    }
    document.getElementsByClassName("Words").innerHTML = count;
   }
   
document.querySelector(".countbtn").addEventListener('click', function(){
   
   var text = document.querySelector(".inputpara").value;
    var count = 0;
    var split = text.split(' ');
    for (var i = 0; i < split.length; i++) {
     if (split[i] != "") {
      count ++;
     }
    }
    document.querySelector(".words").innerHTML = count/minutes;
    console.log("helo");
    console.log(text);
})