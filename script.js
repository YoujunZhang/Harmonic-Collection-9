function myFirstFunction() {
    console.log("function ran, click detected!");
}

function backgroundColorChange(){
    // console.log("write code change background color");
    var bodyElement = document.body; 
    // console.log("bodyElement:", bodyElement);
    bodyElement.style.backgroundColor = "#FFFFF9";
}

function backgroundColorChangeDiv(){
    // get the box div 
    var boxDiv = document.getElementById("box");
    boxDiv.style.backgroundColor = "#afa8ed";
    boxDiv.style.borderRadius = "20px";
    // you can also check the background color of body here
    // document.body.style.backgroundColor = "#ffff00";
}

function myEvent(e){
    console.log("id of element being clicked on:", e.target.id);
    var el = document.getElementById(e.target.id);
    el.style.backgroundColor = "#edafa8";
}

