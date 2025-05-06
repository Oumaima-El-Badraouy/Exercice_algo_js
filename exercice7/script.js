// Correction avec objets json

// function afficher(){
//   var p={"personne":{"nom":"ahmend","Enfants":[{"nom":"sara"}]}};
//   var input=document.getElementById("input").value;
//   var res="les enfants sont :"
//   if(p.personne.nom===input){
//     if (p.personne.Enfants.length > 0) {
//         p.personne.Enfants.forEach(function(enfant) {
//           res += enfant.nom + " , ";
//         });
//     alert(res);
//   }
//   else{
//     alert("ce nom n'exect pas");
//   }
// }
// }


// Correction avec tableau d'objets json
function afficher(){
    var p=[{"personne":{"nom":"ahmend","Enfants":[{"nom":"sara"}]}}];
    var input=document.getElementById("input").value;
    var res="les enfants sont :";
    for(var i=0;i<p.length;i++){ if(p[i].personne.nom===input){
      if (p[i].personne.Enfants.length > 0) {
          p[i].personne.Enfants.forEach(function(enfant) {
            res += enfant.nom + " , ";
          });
      alert(res);
    }
    
  }}
   
  }