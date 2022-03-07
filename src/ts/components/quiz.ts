//@ts-nocheck

const quiz = () => {
  // Q&A

  let currentQuestion = 0;
  let score = 0;
  let currentQuestionNumber = 1;

  const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { option: "Home Tool Markup Language", answer: false },
        { option: "Hyper Text Markup Language", answer: true },
      ],
    },
    {
      question: "Which is the correct CSS syntax?",
      answers: [
        { option: "body {color: black}", answer: true },
        { option: "body: color = black", answer: false },
      ],
    },
    {
      question: 'How do you write "Hello World" in an alert box?',
      answers: [
        { option: 'msg("Hello World")', answer: false },
        { option: 'alert("Hello World")', answer: true },
      ],
    },

    {
      question: "What is the correct way to write a JavaScript array?",
      answers: [
        { option: 'const colors = ["red", "green", "blue")', answer: true },
        { option: 'const colors = ("red", "green", "blue")', answer: false },
      ],
    },

    {
      question: "JavaScript is the same as Java.",
      answers: [
        {
          option: "True",
          answer: false,
        },
        { option: "False", answer: true },
      ],
    },

    {
      question: "Which operator is used to assign a value to a variable?",
      answers: [
        {
          option: "=",
          answer: true,
        },
        { option: "*", answer: false },
      ],
    },

    {
      question: "How do you round the number 7.25, to the nearest integer?",
      answers: [
        {
          option: "Math.rnd(7.25)",
          answer: false,
        },
        { option: "Math.round(7.25)  ", answer: true },
      ],
    },
  ];

  // variables
  const restartBtn = document.querySelector(".restart");
  const nextBtn = document.querySelector(".next");
  const submitBtn = document.querySelector(".submit");
  const firstBtn = document.querySelector(".first");
  const secondBtn = document.querySelector(".second");
  const userScore = document.querySelector(".user-score");
  const totalScore = document.querySelector(".total-score");
  const numOfQuestion = document.querySelector(".num-of-question");
  const totalQuestions = document.querySelector(".total-questions");
  const questionText = document.querySelector(".question-text");

  // functions
  function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    totalQuestions.innerHTML = questions.length;
    numOfQuestion.innerHTML = currentQuestionNumber;
    questionText.innerHTML = questions[currentQuestion].question;
    firstBtn.innerHTML = questions[currentQuestion].answers[0].option;

    firstBtn.onclick = () => {
      if (questions[currentQuestion].answers[0].answer) {
        if (score < questions.length) {
          score += 1;
        }
      }
      userScore.innerHTML = score;
      if (currentQuestion < questions.length - 1) {
        next();
      }

      if (currentQuestion === questions.length) {
        submit();
      }
    };

    secondBtn.innerHTML = questions[currentQuestion].answers[1].option;
    secondBtn.onclick = () => {
      if (questions[currentQuestion].answers[1].answer) {
        if (score < questions.length) {
          score += 1;
        }
      }
      userScore.innerHTML = score;

      if (currentQuestion < questions.length - 1) {
        next();
      }

      if (currentQuestion === questions.length) {
        submit();
      }
    };
  }

  beginQuiz();

  function restart() {
    currentQuestion = 0;
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    firstBtn.classList.remove("hide");
    secondBtn.classList.remove("hide");
    score = 0;
    currentQuestionNumber = 1;
    totalQuestions.innerHTML = questions.length;
    userScore.innerHTML = score;
    beginQuiz();
  }

  function next() {
    currentQuestion += 1;
    currentQuestionNumber += 1;
    numOfQuestion.innerHTML = currentQuestionNumber;
    if (currentQuestion >= questions.length - 1) {
      nextBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    firstBtn.innerHTML = questions[currentQuestion].answers[0].option;
    firstBtn.onclick = () => {
      if (questions[currentQuestion].answers[0].answer) {
        if (score < questions.length) {
          score += 1;
        }
      }

      userScore.innerHTML = score;

      if (currentQuestion < questions.length - 1) {
        next();
      }

      if (currentQuestion === questions.length) {
        submit();
      }
    };

    secondBtn.innerHTML = questions[currentQuestion].answers[1].option;
    secondBtn.onclick = () => {
      if (questions[currentQuestion].answers[1].answer) {
        if (score < questions.length) {
          score += 1;
        }
      }
      userScore.innerHTML = score;
      if (currentQuestion < questions.length - 1) {
        next();
      }

      if (currentQuestion === questions.length) {
        submit();
      }
    };
  }

  function submit() {
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    firstBtn.classList.add("hide");
    secondBtn.classList.add("hide");

    if (score >= 5) {
      questionText.innerHTML = `You answered ${score} questions correctly! Congratulations! You have passed the test 😃`;
    } else {
      questionText.innerHTML = `You answered ${score} questions correctly! Unfortunately You have failed the test ☹️ `;
    }
  }

  // events
  restartBtn.addEventListener("click", restart);
  nextBtn.addEventListener("click", next);
  submitBtn.addEventListener("click", submit);
};

export default quiz;
