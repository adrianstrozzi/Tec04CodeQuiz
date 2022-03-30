let questionText = document.getElementById("question-text");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");


let quizQuestions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    options: ["<scripting>", "<script>", "<javascript>", "<js>"],
    answer: "<script>",
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    options: ["Both the <head> and <body> sections", "<footer>", "<head>", "<body>"],
    answer: "<body>",
  },
  {
    title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: ["<script href='xxx.js'>", "<script name='xxx.js'", "<script src='xxx.js'", "<script class='xxx.js'"],
    answer: "<script src='xxx.js'",
  },
  {
    title: '"How do you write "Hello World" in an alert box?"',
    options: ['msg("Hello World");', 'alert("Hello World");', 'alertBox("Hello World");', 'msgBox("Hello World");'],
    answer: 'alert("Hello World");',
  },
  {
    title: "How to write an IF statement in JavaScript?",
    options: ["if i = 5 then", "if (i = 5)", "if i == 5 then", "if i = 5"],
    answer: "if (i = 5)",
  },
];