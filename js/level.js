var second=0;
var minute=0;
var hour=0;
var play = new Audio("play.mp3");
var win = new Audio("win.mp3");
var wrong = new Audio("wrong.mp3");
var numberArray = [];
var one = {
  nextWebside: "level_2.html",
  finishPic: "./images/finish_1.png",
  correctNumber:[2,3,8,9,13,14,17,18,24,25,26,27,31,32,33,34,35,36,
                     37,38,39,40,41,50,51,53,54,55,56,57,58,60,61,63,64,65,
                     66,67,68,70,71,73,74,75,76,77,78,80,81,90,91,92,93,94,
                     95,96,97,98,99,100],
  load:check,
  result:judge
}

var two = {
  nextWebside: "level_3.html",
  finishPic: "./images/finish_2.png",
  correctNumber:[12,13,14,17,18,19,21,22,24,25,26,27,28,29,30,31,33,34,35,
                 36,37,38,39,40,41,43,44,45,46,47,48,49,50,51,52,54,55,56,57,
                 58,59,60,62,63,65,66,67,68,69,73,74,75,76,77,78,84,85,86,87,
                 95,96],
  load:check,
  result:judge
}

var three = {
  nextWebside: "level_4.html",
  finishPic: "./images/finish_3.png",
  correctNumber:[4,5,6,7,13,14,15,16,17,18,23,24,26,27,28,31,32,33,34,35,36,
                37,38,43,44,45,46,47,48,49,53,54,55,56,57,58,59,60,63,64,65,
                66,67,68,69,74,75,76,77,78,85,87,94,95,96,97],
  load:check,
  result:judge
}

var four = {
  nextWebside: "level_5.html",
  finishPic: "./images/finish_4.png",
  correctNumber:[3,4,5,17,18,20,21,31,32,36,37,46,52,53,65,66,67,68,69,70,71,
                 72,73,74,80,83,84,89,95,99,100,104,110,112,113,114,115,116,
                 117,119,125,127,128,129,130,131,132,134,140,141,143,144,145,
                 146,148,149,156,158,159,160,161,163,171,173,174,175,176,178,
                 186,188,189,190,191,193,201,208,216,217,218,219,220,221,222,223],
  load:check,
  result:judge
}

var five = {
  nextWebside: "home.html",
  finishPic: "./images/finish_5.png",
  correctNumber:[6,7,8,9,10,20,21,23,25,26,35,36,38,40,41,50,51,52,53,54,55,56,
                 66,70,77,78,79,80,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,
                 97,98,99,100,101,102,103,104,105,107,108,109,110,111,112,114,115,
                 116,117,118,119,126,130,141,142,144,145,156,157,158,159,160,170,
                 171,172,173,174,175,176,184,185,186,187,188,189,190,191,192,198,
                 199,200,201,202,204,205,206,207,208,213,214,215,221,222,223],
  load:check,
  result:judge
}

//varible


function check(){
  if (this.result()){
    win.play();
    this.displayPic = true;

    var timeNumber = hour+" hr "+minute+" min "+second+" sec ";
    this.timeNumber = timeNumber;
    localStorage.this = JSON.stringify(this);
    localStorage.one = JSON.stringify(one);
    localStorage.two = JSON.stringify(two);
    localStorage.three = JSON.stringify(three);
    localStorage.four = JSON.stringify(four);
    localStorage.five = JSON.stringify(five);

    setTimeout(function(){window.location.href = "pass.html";},3000);
  }else{
    wrong.play();
    document.getElementById("tips").innerHTML = "<p>Oops, you ruin my draw!</p>";
  }
}

function judge(){
  if (numberArray.length==this.correctNumber.length){
    for(var i=0; i<this.correctNumber.length; i++){
      if (numberArray.indexOf(this.correctNumber[i])<0){
        return false;
      }
    }
    return true;
  }
}
//judge



window.addEventListener("load",draw);
window.addEventListener("load",timeCount);


function timeCount(){
    second=second+1;
    setTimeout("timeCount()",1000);
    while(second>=60){
        minute=minute+1;
        second=0;
        while(minute>=60){
            hour=hour+1;
            minute=0;
            second=0;
        }
    }
}
//timer




function draw(){
  document.getElementById("right").src = "./images/btn_draw_focus.png";
  document.getElementById("left").src = "./images/btn_mark.png";
  document.getElementById("middle").src = "./images/btn_erase.png";

  var mark = document.getElementById("panel");
  mark.removeEventListener("click",markBox);

  var cut = document.getElementById("panel");
  cut.removeEventListener("click",cutBox);

  var fill = document.getElementById("panel");
  fill.addEventListener("click",fillBox);

}

function erase(){
  document.getElementById("right").src = "./images/btn_draw.png";
  document.getElementById("left").src = "./images/btn_mark.png";
  document.getElementById("middle").src = "./images/btn_erase_focus.png";

  var mark = document.getElementById("panel");
  mark.removeEventListener("click",markBox);

  var fill = document.getElementById("panel");
  fill.removeEventListener("click",fillBox);

  var cut = document.getElementById("panel");
  cut.addEventListener("click",cutBox);

}

function mark(){
  document.getElementById("right").src = "./images/btn_draw.png";
  document.getElementById("left").src = "./images/btn_mark_focus.png";
  document.getElementById("middle").src = "./images/btn_erase.png";

  var cut = document.getElementById("panel");
  cut.removeEventListener("click",cutBox);

  var fill = document.getElementById("panel");
  fill.removeEventListener("click",fillBox);

  var mark = document.getElementById("panel");
  mark.addEventListener("click",markBox);

}
//three buttons




function fillBox(event){
  play.play();
  var theClickedTd = event.target;
  var IDNumber = Number(theClickedTd.id);
  var oneNumber = numberArray.indexOf(IDNumber);
  if (oneNumber < 0){
    numberArray.push(IDNumber);
  }
  view.displayCell(IDNumber);
}

function cutBox(event){
  var theClickedTd = event.target;
  var IDNumber = Number(theClickedTd.id);
  var anyNumber = numberArray.indexOf(IDNumber);
  if (anyNumber >= 0){
    numberArray.splice(anyNumber,1);
  }
  view.removeCell(IDNumber);
}

function markBox(event){
  var theClickedTd = event.target;
  var IDNumber = Number(theClickedTd.id);
  var anyNumber = numberArray.indexOf(IDNumber);
  if (anyNumber >= 0){
    numberArray.splice(anyNumber,1);
  }
  view.markCell(IDNumber);
}
//addEventListener




var view = {
	displayCell: function(IDNumber) {
		var cell = document.getElementById(IDNumber);
        cell.setAttribute("class", "focus");
	},
  markCell: function(IDNumber) {
		var cell = document.getElementById(IDNumber);
        cell.setAttribute("class", "cross");
	},
  removeCell: function(IDNumber) {
		var cell = document.getElementById(IDNumber);
        cell.removeAttribute("class", "focus");
	}
};
//view
