// Define your quiz questions and answers
const quizQuestions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Neptune", "Earth"],
      correctAnswer: 0
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      choices: ["China", "Japan", "India", "Brazil"],
      correctAnswer: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Go", "Au", "Ag", "Gd"],
      correctAnswer: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: 0
    },
    {
      question: "Which year was the first iPhone released?",
      choices: ["2005", "2007", "2010", "2013"],
      correctAnswer: 1
    },
    // Add more questions here
  ];
  
  // DOM elements
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestion = 0;
  
  // Load the current question
  function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesElement.innerHTML = "";
    question.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => checkAnswer(index));
      choicesElement.appendChild(li);
    });
  
    feedbackElement.textContent = "";
    nextButton.disabled = true;
  }
  
  // Check the selected answer
  function checkAnswer(choiceIndex) {
    const question = quizQuestions[currentQuestion];
    if (choiceIndex === question.correctAnswer) {
      feedbackElement.textContent = "Correct!";
    } else {
      feedbackElement.textContent = "Wrong!";
    }
    nextButton.disabled = false;
  }
  
  // Move to the next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
      loadQuestion();
    } else {
      // Display quiz completion message or perform other actions
    }
  }
  
  // Event listeners
  nextButton.addEventListener("click", nextQuestion);
  
  // Start the quiz
  loadQuestion();
  