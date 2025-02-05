document.getElementById('ajouterLigne').addEventListener('click', () => {
    const tableBody = document.querySelector('#factureTable tbody');
    const ligneModele = document.querySelector('.ligne');
    const nouvelleLigne = ligneModele.cloneNode(true);

    // Réinitialiser les champs de la nouvelle ligne
    nouvelleLigne.querySelector('.desc').value = '';
    nouvelleLigne.querySelector('.qte').value = 1;
    nouvelleLigne.querySelector('.prix').value = 0;
    nouvelleLigne.querySelector('.ligneTotal').textContent = '0.00';

    tableBody.appendChild(nouvelleLigne);
});

// Remplir automatiquement
document.getElementById('remplirAuto').addEventListener('click', () => {
    const descriptions = ['Produit A', 'Produit B', 'Produit C', 'Produit D'];

    document.querySelectorAll('.ligne').forEach(ligne => {
        const randomDesc = descriptions[Math.floor(Math.random() * descriptions.length)];
        const randomQte = Math.floor(Math.random() * 10) + 1;
        const randomPrix = (Math.random() * 100).toFixed(2);

        ligne.querySelector('.desc').value = randomDesc;
        ligne.querySelector('.qte').value = randomQte;
        ligne.querySelector('.prix').value = randomPrix;
        ligne.querySelector('.ligneTotal').textContent = (randomQte * randomPrix).toFixed(2);
    });
});

// Calculer les montants
document.getElementById('calculer').addEventListener('click', () => {
    let sousTotal = 0;

    document.querySelectorAll('.ligne').forEach(ligne => {
        const qte = parseInt(ligne.querySelector('.qte').value, 10);
        const prix = parseFloat(ligne.querySelector('.prix').value);
        const total = qte * prix;

        ligne.querySelector('.ligneTotal').textContent = total.toFixed(2);
        sousTotal += total;
    });

    alert(`Sous-Total : ${sousTotal.toFixed(2)} €`);
});