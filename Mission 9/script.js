document.getElementById('btn-correction').addEventListener('click', function() {
    // Réponses correctes
    const correctAnswers = {
      q1: '1',
      q2: '1',
      q3: '1',
      q4: '1',
      q5: '1',
      q6: '1',
      q7: '1',
      q8: '1',
      q9: '1',
      q10: '1'
    };
  
    // Variable pour compter le score
    let score = 0;
  
    // Vérifier les réponses et afficher des messages
    for (let question in correctAnswers) {
      let selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === correctAnswers[question]) {
        selected.parentElement.style.backgroundColor = '#4CAF50'; // Couleur verte pour la bonne réponse
        score++; // Incrémenter le score pour chaque bonne réponse
      } else if (selected) {
        selected.parentElement.style.backgroundColor = '#f44336'; // Rouge pour la mauvaise réponse
      }
    }
  
    // Afficher l'alerte avec le score
    alert(`Votre score est ${score} / 10`);
  });
  
  document.getElementById('btn-corrige').addEventListener('click', function() {
    // Affiche toutes les réponses correctes
    const correctAnswers = {
      q1: 'Michelangelo',
      q2: 'Leon',
      q3: 'casquette',
      q4: 'Makakosanpo',
      q5: 'Eminem',
      q6: 'Shadow',
      q7: 'cote est',
      q8: 'Luxembourg',
      q9: 'Real Madrid',
      q10: 'Naruto'
    };
  
    for (let question in correctAnswers) {
      let correctLabel = correctAnswers[question];
      let labels = document.querySelectorAll(`input[name="${question}"]`);
      labels.forEach(label => {
        if (label.nextSibling.textContent.trim() === correctLabel) {
          label.parentElement.style.backgroundColor = '#4CAF50'; // Mettre en vert la bonne réponse
        }
      });
    }
  
    // Redirection vers la page corrigée après l'affichage des réponses
    window.location.href = 'corrige.html'; // Redirige vers corrige.html
  });
  
  document.getElementById('btn-effacer').addEventListener('click', function() {
    // Réinitialiser tous les champs du QCM
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      input.checked = false;
      input.parentElement.style.backgroundColor = ''; // Réinitialiser les couleurs
    });
  });
  