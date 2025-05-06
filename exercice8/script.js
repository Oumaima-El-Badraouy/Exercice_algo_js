function Liste() {
    var i = formulaire.pays.selectedIndex;

    if (i == 0) {
        for (var j = 1; j <= 2; j++) {
            formulaire.ville.options[j].text = "";
        }
    } else {
        var vi;
        switch (i) {
            case 1: vi = ["rabat", "casa"]; break;
            case 2: vi = ["soussa", "qrtage"]; break;
            case 3: vi = ["ajman", "dubai"]; break;
        }

        for (var k = 1; k <= 2; k++) {
            formulaire.ville.options[k].text = vi[k - 1];
        }
    }

    formulaire.ville.selectedIndex = 0;
}
