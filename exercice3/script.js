fetch("data.json")
.then(response => response.json())
.then(data => {
    console.log(data);  // Ajoutez ceci pour vérifier si les données sont bien récupérées
    const tbody = document.querySelector("tbody");
    data.forEach(personne => {
        const row = document.createElement("tr");
        const tdNom = document.createElement("td");
        tdNom.textContent = personne.nom;
        const tdAge = document.createElement("td");
        tdAge.textContent = personne.age;
        row.appendChild(tdNom);
        row.appendChild(tdAge);
        tbody.appendChild(row);
    });
})
.catch(error => console.error("Error:", error));
