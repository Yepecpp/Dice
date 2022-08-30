let Faces = document.getElementsByClassName('dice')[1];
let dice = document.getElementById('dice');
dice.addEventListener('click', ()=> {
    let random = [Math.floor(Math.random() * 360) + 1, Math.floor(Math.random() * 360) + 1, Math.floor(Math.random() * 360) + 1];
    dice.style.animation = `rotate2 2s linear ${random[0]>=180? 4 : 2} alternate`;
    dice.addEventListener('animationend', (e)=> {
        console.log(e);
        dice.style.animation = '';  
        dice.style.transform = `rotateX(${random[0]}deg) rotateY(${random[1]}deg) rotateZ(${random[2]}deg)`;
    }
    );
});
Faces.addEventListener('click', (e)=> {
if (e.target.id === e.currentTarget.id)  return;
let random = doStuff(e.target.id);  
dice.style.animation = `test 1s linear 1 alternate`;
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