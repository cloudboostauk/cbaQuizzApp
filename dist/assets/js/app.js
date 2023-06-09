// Define your quiz questions and answers
const quizQuestions = [
    {
      question: "Which of the following statements is TRUE.",
      choices: ["It is possible to use Autoscaling with EBS, rather than EC2.", 
      "It is possible to configure an Autoscaling Group to repair degraded EBS volumes, without the need to terminate the EC2 instances.", 
      "You are able to attach mutiple EBS volumes to an EC2 instance.", 
      "You are able to at tach multiple EC2 instances to an EBS Volume."],
      correctAnswer: 2
    },
    {
      question: "How many Internet Gateways can you attach to your custom VPC?",
      choices: ["3", "5", "4", "1"],
      correctAnswer: 3
    },
    {
      question: "A company wants to self-manage a database environment. Which of the following should be adopted to fulfil this requirement?",
      choices: ["Use the DynamoDB service", 
                "Provision the database using the AWS RDS service", 
                "Provision the database using the AWS RDS service", 
                "Create an EC2 Instance and install the database service accordingly"],
      correctAnswer: 3
    },
    {
      question: "You have been asked to identify a service on AWS that is a durable object storage. Which of the services will this be?",
      choices: ["Elastic Compute Cloud (EC2)", 
                "Mobile Hub", 
                "Simple Service Storage (S3)",
                "Elastic File Service (EFS)"],
      correctAnswer: 2
    },
    {
      question: "What data formats are policy documents written in?",
      choices: ["yaml",
                "json",
                "xml",
                "pdf"],
      correctAnswer: 0
    },
    {
      question: "You need to restrict access to an S3 Bucket. Which of the following will you use to do so?",
      choices: ["CloudFront",
                "Identity Federation with Active Directory",
                "S3 Bucket Policy",
                "CloudWatch"],
      correctAnswer: 2
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
  