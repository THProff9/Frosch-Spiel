const Frosch = document.getElementById("Frosch");
const Bier = document.getElementById("Bier");

function jump() {
    if (Frosch.classList != "jump"){
    Frosch.classList.add("jump");

    setTimeout (function () {
        Frosch.classList.remove("jump");
    }, 350)
    }
    }

    let isAlife = setInterval (function () {

        let FroschTop = parseInt(window.getComputedStyle(Frosch).getPropertyValue("top"));

        let BierLeft = parseInt(window.getComputedStyle(Bier).getPropertyValue("left"));
        

        if (BierLeft <90 && BierLeft > 0 && FroschTop >= 210){

            alert("Spiel Über du Angelsachse");
        }
    }, 10);

document.addEventListener("keydown", function (event) {
    jump();
});

var timer;
var ele = document.getElementById('timer');

(function (){
var sec = 1;
timer = setInterval(()=>{
    ele.innerHTML = '00:'+ sec;
    sec ++;
},800)
})()