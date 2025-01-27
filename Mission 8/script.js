document.getElementById("btn-correction").addEventListener("click", function () {
    const answers = {
        q1: "Paris",
        q2: "Jupiter",
        // Ajoutez les réponses correctes pour les autres questions ici
    };

    let score = 0;
    const form = document.getElementById("quiz-form");

    for (const [question, correctAnswer] of Object.entries(answers)) {
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === correctAnswer) {
            score++;
        }
    }

    document.getElementById("result").textContent = `Votre score est de ${score} / ${Object.keys(answers).length}`;
});

document.getElementById("btn-corrige").addEventListener("click", function () {
    const corriges = {
        q1: "Paris",
        q2: "Jupiter",
        // Ajoutez les réponses corrigées ici
    };

    const corrigesWindow = window.open("", "Corrigé", "width=400,height=600");
    corrigesWindow.document.write("<html><head><title>Corrigé</title></head><body>");
    corrigesWindow.document.write("<h1>Corrigé du Quizz</h1>");

    for (const [question, correctAnswer] of Object.entries(corriges)) {
        corrigesWindow.document.write(`<p>${question}: ${correctAnswer}</p>`);
    }

    corrigesWindow.document.write("<button onclick='window.close()'>Fermer</button>");
    corrigesWindow.document.write("</body></html>");
});
