function Nombresaleatoire(){
    let T=new Array();
    for(var i=0;i<10;i++)
         T[i]=(Math.random()*100).toFixed(1);
    var res="tableau est :";
    for( i=0;i<T.length;i++)
        res+=T[i]+" ";
    alert(res);


}
Nombresaleatoire();