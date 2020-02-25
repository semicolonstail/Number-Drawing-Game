if (localStorage.this !== undefined) {
thisObject = JSON.parse(localStorage.this);
}

document.getElementById("msg").innerHTML = "<p>It took you "+thisObject.timeNumber +" to complete. Challenge next level?</p>" ;
document.getElementById("finishPic").src = thisObject.finishPic;



var t = 5;
function showTime(){
    t -= 1;
    document.getElementById('timer').innerHTML= "<p>Go to gallery in "+t+"s.</p>";
    if(t==0){
        var nextPage = thisObject.nextWebside;
        window.location.href=nextPage;
    }
    setTimeout("showTime()",1000);
}
showTime();
