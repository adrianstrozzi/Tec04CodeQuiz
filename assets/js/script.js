
let startBtn = document.getElementById("quiz-start-btn");
let nextBtn = document.getElementById("question-next");
let timer = document.getElementById("quiz-timer");
let timerContainer = document.getElementById("quiz-counter");
let quizPoints = document.getElementById("quiz-points");
let quizPointsContainer = document.getElementById("quiz-score");
let questionContainer = document.getElementById("quiz-question")
let questionText = document.getElementById("question-text");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");


let scoreContainer = document.getElementById("input-score-container");
let user = document.getElementById("user-name");
let userScore = document.getElementById("user-score");
let savedScore = document.getElementById("saved-score");
let savedName = document.getElementById("saved-name");
let saveButton = document.getElementById("save-score");

// let optionEvents = [option1, option2, option3, option4]

let quizQuestions = [
  {
    title: "Inside which HTML tag do we put the JavaScript file?",
    options: ['scripting', 'script', 'javascript', 'js'],
    answer: 'script',
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    options: ['Both the "head" and "body"', '"footer"', '"head"', '"body"'],
    answer: '"body"',
  },
  {
    title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: ["script href='xxx.js'", "script name='xxx.js'", "script src='xxx.js'", "script class='xxx.js'"],
    answer: "script src='xxx.js'",
  },
  {
    title: 'How do you write "Hello World" in an alert box?',
    options: ['msg("Hello World");', 'alert("Hello World");', 'alertBox("Hello World");', 'msgBox("Hello World");'],
    answer: 'alert("Hello World");',
  },
  {
    title: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i = 5)", "if i == 5 then", "if i = 5"],
    answer: "if (i = 5)",
  },
];

let currentQuestion = 0;
let score = 0;
let totalQuestions = quizQuestions.length;
let secondsLeft = 60;


function showQuestion() {
  let question = quizQuestions[currentQuestion];
  questionText.innerHTML = question.title;
  option1.innerHTML = question.options[0];
  option2.innerHTML = question.options[1];
  option3.innerHTML = question.options[2];
  option4.innerHTML = question.options[3];
}



function nextQuestion() {
  currentQuestion++;
  if (currentQuestion === totalQuestions) {
    alert("Quiz Over!");
    secondsLeft = 0;
    questionContainer.style.display = "none";
    timerContainer.style.display = "none";
    quizPointsContainer.style.display = "block";
  } else {
    showQuestion();
  }
}

function checkAnswer(answer) {
  if (answer === quizQuestions[currentQuestion].answer) {
    score += 10;
    quizPoints.textContent = "SCORE: " + score
    alert("Correct Answer +10");
  } else {
    score = 0;
    secondsLeft -= 10;
    alert("Wrong Answer 0 points");
  }
}

function startTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "TIMER: " + secondsLeft;
    if (secondsLeft === 0) {
      alert("Quiz Over!")
      questionContainer.style.display = "none";
      timerContainer.style.display = "none";
      scoreContainer.style.display = "block";
      clearInterval(timerInterval);
    }
  }, 1000);
}


function changeQuestion(event) {
  event.preventDefault();
  let answer = event.target.innerHTML;
  checkAnswer(answer);
  nextQuestion();
}

option1.addEventListener("click", changeQuestion);
option2.addEventListener("click", changeQuestion);
option3.addEventListener("click", changeQuestion);
option4.addEventListener("click", changeQuestion);


option1.onmouseover = function (event) {
  let target = event.target;
  target.style.color = '#e100ff';
  target.style.cursor = 'pointer';
};

option1.onmouseout = function (event) {
  let target = event.target;
  target.style.color = '#4900f2';
};
option2.onmouseover = function (event) {
  let target = event.target;
  target.style.color = '#e100ff';
  target.style.cursor = 'pointer';
};

option2.onmouseout = function (event) {
  let target = event.target;
  target.style.color = '#4900f2';
};
option3.onmouseover = function (event) {
  let target = event.target;
  target.style.color = '#e100ff';
  target.style.cursor = 'pointer';
};

option3.onmouseout = function (event) {
  let target = event.target;
  target.style.color = '#4900f2';
};
option4.onmouseover = function (event) {
  let target = event.target;
  target.style.color = '#e100ff';
  target.style.cursor = 'pointer';
};

option4.onmouseout = function (event) {
  let target = event.target;
  target.style.color = '#4900f2';
};


startBtn.onmouseover = function (event) {
  let target = event.target;
  target.style.cursor = 'pointer';
};

saveButton.onmouseover = function (event) {
  let target = event.target;
  target.style.cursor = 'pointer';
};

// optionEvents.every.onmouseover = function (event) {
//   let target = event.target;
//   target.style.color = '#e100ff';
// };

// optionEvents.every.onmouseout = function (event) {
//   let target = event.target;
//   target.style.color = '#4900f2';
// };



startBtn.addEventListener("click", function () {
  timerContainer.style.display = "block";
  quizPointsContainer.style.display = "block";
  questionContainer.style.display = "block";
  startTimer();
  showQuestion();
})

nextBtn.addEventListener("click", nextQuestion)


function saveLastScore() {
  var quizScore = {
    user: user.value,
    score: userScore.value,
  };
  localStorage.setItem("quizScore", JSON.stringify(quizScore));
}

function renderLastScore() {
  var lastScore = JSON.parse(localStorage.getItem("quizScore"));
  if (lastScore !== null) {
    document.getElementById("saved-name").innerHTML = lastScore.user;
    document.getElementById("saved-score").innerHTML = lastScore.score;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  saveLastScore();
  renderLastScore();
});

function init() {
  renderLastScore();
}
init();
