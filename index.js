let Faces = document.getElementById('f-dice');
let dice = document.getElementById('dice');
dice.addEventListener('click', ()=> {
    let random = [Math.floor(Math.random() * 360) + 1, Math.floor(Math.random() * 360) + 1, Math.floor(Math.random() * 360) + 1];
    dice.style.animation = `rotate 4s linear  alternate`;
    dice.addEventListener('animationend', (e)=> {
        dice.style.animation = '';  
        dice.style.transform = `rotateX(${random[0]}deg) rotateY(${random[1]}deg) rotateZ(${random[2]}deg)`;
    }
    );
});
Faces.addEventListener('click', (e)=> {
if (e.target.id === e.currentTarget.id)  return;
var id = !e.target.id? e.target.parentElement.id : e.target.id;
let random = doStuff(id);  
dice.style.animation = `rotate 1s linear 2 alternate`;
dice.addEventListener('animationend', ()=> {
    dice.style.animation = '';  
    dice.style.transform = `rotateX(${random[0]}deg) rotateY(${random[1]}deg) rotateZ(${random[2]}deg)`;
}
);
e.stopPropagation();
});

function doStuff (id){
switch (id) {
    case '1':
        return [0,0,0];
    case '2':
        return [0,180,0];
    case '3':
        return [-90,0,0];
    case '4':
        return [0,90,0];
    case '5':
        return [0,265,0];
    case '6':
        return [90,0,0];
        default:
            return [0,0,0];
}
}
    //1 = rotateX(0deg) rotateY(0deg) rotateZ(0deg) done 
    //2 = rotateX(0deg) rotateY(180deg) rotateZ(0deg) done
    //3 = rotateX(-90deg) rotateY(0deg) rotateZ(0deg) done
    //4 = rotateX(0deg) rotateY(90deg) rotateZ(0deg)done
    //5 = rotateX(0deg) rotateY(265deg) rotateZ(0deg) done
    //6 = rotateX(90deg) rotateY(0deg) rotateZ(0deg)done 
    //let dice = document.getElementById('dice'); 
   // dice.style.transform = 'rotateX(0deg) rotateY(265deg) rotateZ(0deg)';
var audio= document.getElementById('audio');
var resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', ()=> {
    dice.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
}
);
var batearbtn = document.getElementById('batear');
var AStatus = false;
batearbtn.addEventListener('click', ()=> {
    if (!AStatus) { 
        AStatus=true; 
        audio.play();
        dice.style.animation = `rotate2 10s linear alternate infinite`;
        console.log(dice.style.animation);
    } else { 
        AStatus=false;
        audio.pause();
        dice.style.animation = ``;
    }
}); 
