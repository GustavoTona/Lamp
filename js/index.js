const bntOn = document.getElementById ('btn-on');
const bntOff = document.getElementById ('btn-off');
const lamp = document.getElementById('lamp-off')

function lampOn (){
    lamp.src='./img/imgOn.png';
}
function lampOff (){
    lamp.src ='./img/imgOff.png';
}
bntOn.addEventListener('click', lampOn);
bntOff.addEventListener('click', lampOff)
