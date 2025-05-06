let var1=Math.floor(Math.random()*100)+1;
let a=0;
function submitG(){
a++;
let input=parseInt(document.getElementById('input').value);
if(a>3){
document.body.innerHTML=`maerci mais le nombre est ${var1}`;
}

if(var1===input){
alert("Bravo vous avez réussir");
}
else{
alert("OH non essayer en cour une fois");

}


}