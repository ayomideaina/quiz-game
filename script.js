const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionArea = document.getElementById('question-area');
const finalScore = document.getElementById('final-score');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correct: 1
    },
    {
        question: "In which year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        question: "What software company is headquartered in Redmond, Washington?",
        options: ["Apple", "Google", "Microsoft", "Twitter"],
        correct: 2
    },
    {
        question: "What phone company produced the 3310?",
        options: ["BB", "Itel", "Samsung", "Nokia"],
        correct: 3
    },
    {
        question: "Which city has the largest population in Nigeria?",
        options: ["Abuja", "Ibadan", "Kano", "Lagos"],
        correct: 3
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "What is the smallest continent?",
        options: ["Europe", "Australia", "Antarctica", "South America"],
        correct: 1
    }
];


let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {
    let currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Clear old buttons
    optionsContainer.innerHTML = "";
    answered = false;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex justify-between items-center";
        button.addEventListener("click", () => checkAnswer(index, button));
        optionsContainer.appendChild(button);
    });

    updateProgress();
}

function checkAnswer(selectedIndex, button) {
    if (answered) return;
    answered = true;

    let correctIndex = quizQuestions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        feedback.innerHTML = `<i class="fa-solid fa-circle-check text-green-400"></i> Correct!`;
        feedback.className = "mt-4 font-semibold text-green-400";
        score++;
    } else {
        feedback.innerHTML = `<i class="fa-solid fa-circle-xmark text-red-400"></i> Wrong! Correct answer: ${quizQuestions[currentQuestionIndex].options[correctIndex]}`;
        feedback.className = "mt-4 font-semibold text-red-400";
    }

    scoreDisplay.textContent = `Score: ${score}`;

    Array.from(optionsContainer.children).forEach((btn, i) => {
        if (i === correctIndex) {
            btn.classList.add("bg-green-500");
            btn.innerHTML = `${btn.textContent} <i class="fa-solid fa-circle-check"></i>`;
        } else if (btn === button) {
            btn.classList.add("bg-red-500");
            btn.innerHTML = `${btn.textContent} <i class="fa-solid fa-circle-xmark"></i>`;
        } else {
            btn.classList.add("bg-gray-500");
        }
        btn.disabled = true;
    });
}

function updateProgress() {
    let progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
}

function endQuiz() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
    finalScore.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
}

nextBtn.addEventListener("click", () => {
    if (!answered) {
        feedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-yellow-400"></i> Please select an answer first!`;
        feedback.className = "mt-4 font-semibold text-yellow-400";
        return;
    }

    currentQuestionIndex++;
    feedback.textContent = "";

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
});

// Start quiz on page load
showQuestion();