/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/components/quiz.ts":
/*!***********************************!*\
  !*** ./src/ts/components/quiz.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\n//@ts-nocheck\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar quiz = function () {\r\n    // Q&A\r\n    var currentQuestion = 0;\r\n    var score = 0;\r\n    var currentQuestionNumber = 1;\r\n    var questions = [\r\n        {\r\n            question: \"What does HTML stand for?\",\r\n            answers: [\r\n                { option: \"Home Tool Markup Language\", answer: false },\r\n                { option: \"Hyper Text Markup Language\", answer: true },\r\n            ],\r\n        },\r\n        {\r\n            question: \"Which is the correct CSS syntax?\",\r\n            answers: [\r\n                { option: \"body {color: black}\", answer: true },\r\n                { option: \"body: color = black\", answer: false },\r\n            ],\r\n        },\r\n        {\r\n            question: 'How do you write \"Hello World\" in an alert box?',\r\n            answers: [\r\n                { option: 'msg(\"Hello World\")', answer: false },\r\n                { option: 'alert(\"Hello World\")', answer: true },\r\n            ],\r\n        },\r\n        {\r\n            question: \"What is the correct way to write a JavaScript array?\",\r\n            answers: [\r\n                { option: 'const colors = [\"red\", \"green\", \"blue\")', answer: true },\r\n                { option: 'const colors = (\"red\", \"green\", \"blue\")', answer: false },\r\n            ],\r\n        },\r\n        {\r\n            question: \"JavaScript is the same as Java.\",\r\n            answers: [\r\n                {\r\n                    option: \"True\",\r\n                    answer: false,\r\n                },\r\n                { option: \"False\", answer: true },\r\n            ],\r\n        },\r\n        {\r\n            question: \"Which operator is used to assign a value to a variable?\",\r\n            answers: [\r\n                {\r\n                    option: \"=\",\r\n                    answer: true,\r\n                },\r\n                { option: \"*\", answer: false },\r\n            ],\r\n        },\r\n        {\r\n            question: \"How do you round the number 7.25, to the nearest integer?\",\r\n            answers: [\r\n                {\r\n                    option: \"Math.rnd(7.25)\",\r\n                    answer: false,\r\n                },\r\n                { option: \"Math.round(7.25)  \", answer: true },\r\n            ],\r\n        },\r\n    ];\r\n    // variables\r\n    var restartBtn = document.querySelector(\".restart\");\r\n    var nextBtn = document.querySelector(\".next\");\r\n    var submitBtn = document.querySelector(\".submit\");\r\n    var firstBtn = document.querySelector(\".first\");\r\n    var secondBtn = document.querySelector(\".second\");\r\n    var userScore = document.querySelector(\".user-score\");\r\n    var totalScore = document.querySelector(\".total-score\");\r\n    var numOfQuestion = document.querySelector(\".num-of-question\");\r\n    var totalQuestions = document.querySelector(\".total-questions\");\r\n    var questionText = document.querySelector(\".question-text\");\r\n    // functions\r\n    function beginQuiz() {\r\n        currentQuestion = 0;\r\n        totalScore.innerHTML = questions.length;\r\n        totalQuestions.innerHTML = questions.length;\r\n        numOfQuestion.innerHTML = currentQuestionNumber;\r\n        questionText.innerHTML = questions[currentQuestion].question;\r\n        firstBtn.innerHTML = questions[currentQuestion].answers[0].option;\r\n        firstBtn.onclick = function () {\r\n            if (questions[currentQuestion].answers[0].answer) {\r\n                if (score < questions.length) {\r\n                    score += 1;\r\n                }\r\n            }\r\n            userScore.innerHTML = score;\r\n            if (currentQuestion < questions.length - 1) {\r\n                next();\r\n            }\r\n            if (currentQuestion === questions.length) {\r\n                submit();\r\n            }\r\n        };\r\n        secondBtn.innerHTML = questions[currentQuestion].answers[1].option;\r\n        secondBtn.onclick = function () {\r\n            if (questions[currentQuestion].answers[1].answer) {\r\n                if (score < questions.length) {\r\n                    score += 1;\r\n                }\r\n            }\r\n            userScore.innerHTML = score;\r\n            if (currentQuestion < questions.length - 1) {\r\n                next();\r\n            }\r\n            if (currentQuestion === questions.length) {\r\n                submit();\r\n            }\r\n        };\r\n    }\r\n    beginQuiz();\r\n    function restart() {\r\n        currentQuestion = 0;\r\n        nextBtn.classList.remove(\"hide\");\r\n        submitBtn.classList.remove(\"hide\");\r\n        firstBtn.classList.remove(\"hide\");\r\n        secondBtn.classList.remove(\"hide\");\r\n        score = 0;\r\n        currentQuestionNumber = 1;\r\n        totalQuestions.innerHTML = questions.length;\r\n        userScore.innerHTML = score;\r\n        beginQuiz();\r\n    }\r\n    function next() {\r\n        currentQuestion += 1;\r\n        currentQuestionNumber += 1;\r\n        numOfQuestion.innerHTML = currentQuestionNumber;\r\n        if (currentQuestion >= questions.length - 1) {\r\n            nextBtn.classList.add(\"hide\");\r\n        }\r\n        questionText.innerHTML = questions[currentQuestion].question;\r\n        firstBtn.innerHTML = questions[currentQuestion].answers[0].option;\r\n        firstBtn.onclick = function () {\r\n            if (questions[currentQuestion].answers[0].answer) {\r\n                if (score < questions.length) {\r\n                    score += 1;\r\n                }\r\n            }\r\n            userScore.innerHTML = score;\r\n            if (currentQuestion < questions.length - 1) {\r\n                next();\r\n            }\r\n            if (currentQuestion === questions.length) {\r\n                submit();\r\n            }\r\n        };\r\n        secondBtn.innerHTML = questions[currentQuestion].answers[1].option;\r\n        secondBtn.onclick = function () {\r\n            if (questions[currentQuestion].answers[1].answer) {\r\n                if (score < questions.length) {\r\n                    score += 1;\r\n                }\r\n            }\r\n            userScore.innerHTML = score;\r\n            if (currentQuestion < questions.length - 1) {\r\n                next();\r\n            }\r\n            if (currentQuestion === questions.length) {\r\n                submit();\r\n            }\r\n        };\r\n    }\r\n    function submit() {\r\n        nextBtn.classList.add(\"hide\");\r\n        submitBtn.classList.add(\"hide\");\r\n        firstBtn.classList.add(\"hide\");\r\n        secondBtn.classList.add(\"hide\");\r\n        if (score >= 5) {\r\n            questionText.innerHTML = \"You answered \" + score + \" questions correctly! Congratulations! You have passed the test \\uD83D\\uDE03\";\r\n        }\r\n        else {\r\n            questionText.innerHTML = \"You answered \" + score + \" questions correctly! Unfortunately You have failed the test \\u2639\\uFE0F \";\r\n        }\r\n    }\r\n    // events\r\n    restartBtn.addEventListener(\"click\", restart);\r\n    nextBtn.addEventListener(\"click\", next);\r\n    submitBtn.addEventListener(\"click\", submit);\r\n};\r\nexports[\"default\"] = quiz;\r\n\n\n//# sourceURL=webpack://quiz-app/./src/ts/components/quiz.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar quiz_1 = __webpack_require__(/*! ./components/quiz */ \"./src/ts/components/quiz.ts\");\r\n(0, quiz_1.default)();\r\n\n\n//# sourceURL=webpack://quiz-app/./src/ts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;