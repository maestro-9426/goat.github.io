const exercises = [
    {
        title: "Addition de deux nombres",
        description: "Créez une fonction addition(a, b) qui retourne la somme de a et b.",
        solution: "function addition(a, b) {\n    return a + b;\n}",
        demo: function demoAddition() {
            const num1 = parseFloat(prompt("Entrez le premier nombre :"));
            const num2 = parseFloat(prompt("Entrez le deuxième nombre :"));
            alert(`Résultat : ${num1 + num2}`);
        }
    },
    // Ajoutez d'autres exercices ici
];

// Références aux éléments HTML
const exerciseList = document.querySelector("#exercise-list ul");
const exerciseTitle = document.querySelector("#exercise-title");
const exerciseDescription = document.querySelector("#exercise-description");
const exerciseDemo = document.querySelector("#exercise-demo");
const exerciseSolution = document.querySelector("#exercise-solution");
const showSolutionButton = document.querySelector("#show-solution");

// Fonction pour afficher la liste des exercices
function displayExerciseList() {
    exercises.forEach((exercise, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = exercise.title;
        listItem.addEventListener("click", () => selectExercise(index));
        exerciseList.appendChild(listItem);
    });
}

// Fonction pour sélectionner et afficher un exercice
function selectExercise(index) {
    const exercise = exercises[index];
    exerciseTitle.textContent = exercise.title;
    exerciseDescription.textContent = exercise.description;

    // Réinitialiser la zone de démo
    exerciseDemo.innerHTML = "";
    const demoButton = document.createElement("button");
    demoButton.textContent = "Tester l'exercice";
    demoButton.addEventListener("click", exercise.demo);
    exerciseDemo.appendChild(demoButton);

    // Cacher la solution
    exerciseSolution.hidden = true;
    exerciseSolution.textContent = exercise.solution;
}

// Événement pour afficher la solution
showSolutionButton.addEventListener("click", () => {
    exerciseSolution.hidden = !exerciseSolution.hidden;
});

// Initialisation de la page
displayExerciseList();
