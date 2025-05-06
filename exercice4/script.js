

function calculenmbredujours() {
    let input = new Date(document.getElementById("input").value);
    let mois = input.getMonth();

    if (mois % 2 == 0 && mois != 1) {
        alert("31 jours");
    } else if (mois == 1) {
        alert("29 ou 28 jours");
    } else {
        alert("30 jours");
    }
}
