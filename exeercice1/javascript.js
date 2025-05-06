function changer(){
    let variable = document.getElementById('I1');
    let var1=["OIP (1).jpeg","OIP (2).jpeg","OIP (3).jpeg","OIP (4).jpeg","OIP (5).jpeg","OIP (6).jpeg","OIP (7).jpeg","OIP.jpeg","emoticon-amarelo-com-oculos-pensando_1143583-2753.jpeg.jpeg"];
    let i=Math.floor(Math.random()*10);
    if(i>8) i=0;
    variable.src=var1[i];
}