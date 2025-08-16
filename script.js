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
        question: "which city has the largest population in Nigeria?",
        options: ["Abuja", "Ibadan", "Kano", "Lagos"],
        correct: 3
    }
];

