function ajouter(){
    var elt=document.createElement("tr");
    elt.classList.add("lignes");
   var table= document.getElementById("table");
var body=document.querySelector("tbody");
body.appendChild(elt);
    var case1=document.createElement("td");
    case1.innerHTML=prompt("id :");
    elt.appendChild(case1);
    var case2=document.createElement("td");
    case2.innerHTML=prompt("nom :");
    elt.appendChild(case2);
    var case3=document.createElement("td");
    case3.innerHTML=prompt("prenom :");
    elt.appendChild(case3);
    var case3=document.createElement("td");
    var b=document.createElement("button");
    b.type="button";
    b.onclick=function(){supprimer(this)};
    b.innerHTML="*";
    case3.appendChild(b);
    elt.appendChild(case3);
}

function supprimer(elt){
    var supp=elt.closest("tr");
    supp.remove();
}