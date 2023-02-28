
var no_of_btn = document.querySelectorAll(".drum").length;

for(var i=0; i<no_of_btn;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var k = this.innerHTML;
    makesound(k); 
    btnAni(k);   

  });
}

document.addEventListener("keydown",function(e){
  makesound(event.key);
  btnAni(event.key);
})


function makesound(key){

  switch (key) {
    case 'w':audio = new Audio("sounds/crash.mp3");
             audio.play();
             document.querySelector("h1").innerHTML="🚕Taxi🚕";
             break;
    case 'a':audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
             document.querySelector("h1").innerHTML="🚕Moti🚕";
              break;
    case 's':audio = new Audio("sounds/snare.mp3");
              audio.play();
              document.querySelector("h1").innerHTML="🚕Taxman🚕";
              break;
    case "d":audio = new Audio("sounds/tom-1.mp3");
              audio.play();
              document.querySelector("h1").innerHTML="🚕Shutki Mach🚕";
              break;
    case "j":audio = new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case "k":audio = new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "l":audio = new Audio("sounds/tom-4.mp3");
              audio.play();
              break;
  
    default:
      break;
  }

}

function btnAni(currentKey){

   var activeButton = document.querySelector("."+ currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },300);
   
}

// var audio = new Audio("sounds/crash.mp3");
//     audio.play();

