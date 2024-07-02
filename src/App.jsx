import React, { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      question: "Which Indian state is known as the 'Spice Garden of India'?",
      answerOptions: [
        { answer: "Kerala", isCorrect: true },
        { answer: "Andhra Pradesh", isCorrect: false },
        { answer: "Karnataka", isCorrect: false }
      ]
    },
    {
      question: "Who was the first Indian to win a Nobel Prize?",
      answerOptions: [
        { answer: "C.V. Raman", isCorrect: false },
        { answer: "Rabindranath Tagore", isCorrect: true },
        { answer: "Amartya Sen", isCorrect: false }
      ]
    },
    {
      question: "What is the highest civilian award in India?",
      answerOptions: [
        { answer: "Bharat Ratna", isCorrect: true },
        { answer: "Padma Vibhushan", isCorrect: false },
        { answer: "Padma Shri", isCorrect: false }
      ]
    },
    {
      question: "Which Indian city is known as the 'Silicon Valley of India'?",
      answerOptions: [
        { answer: "Hyderabad", isCorrect: false },
        { answer: "Chennai", isCorrect: false },
        { answer: "Bengaluru", isCorrect: true }
      ]
    },
    {
      question: "Who wrote the book 'The Argumentative Indian'?",
      answerOptions: [
        { answer: "Arundhati Roy", isCorrect: false },
        { answer: "Amartya Sen", isCorrect: true },
        { answer: "Salman Rushdie", isCorrect: false }
      ]
    }
  ];

  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const startQuiz = () => {
    setHasStarted(true);
  };

  const nextQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswerIndex(null);
    setCorrectAnswerIndex(null);
  };

  const finishQuiz = () => {
    setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswerIndex(null);
    setCorrectAnswerIndex(null);
    setHasStarted(false);
  };

  const handleAnswerClick = (isCorrect, index) => {
    setSelectedAnswerIndex(index);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else {
      const correctIndex = questions[currentIndex].answerOptions.findIndex(
        (option) => option.isCorrect
      );
      setCorrectAnswerIndex(correctIndex);
    }
  };

  return (
    <div className="container">
      {!hasStarted && !showScore && (
        <div className="first-page">
          <h1>Welcome to <br /> <span>QuizWiz</span></h1>
          <button className="start-btn" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      )}

      {hasStarted && !showScore && (
        <div className="question-answer-container">
          <div className="header">
            <h1>QuizWiz</h1>
            
            <dotlottie-player src="https://lottie.host/5177238d-2af4-422d-a373-55bbd98b5d56/Y5RkxSsbJC.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></dotlottie-player >
          </div>
          <h2>{questions[currentIndex].question}</h2>
          <div className="answer-options">
            {questions[currentIndex].answerOptions.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer.isCorrect, index)}
                className={`answer-options-btn ${
                  selectedAnswerIndex === index
                    ? answer.isCorrect
                      ? "correct"
                      : "wrong"
                    : correctAnswerIndex === index
                    ? "correct"
                    : ""
                }`}
                disabled={
                  selectedAnswerIndex !== null || correctAnswerIndex !== null
                }
              >
                {answer.answer}
              </button>
            ))}
          </div>

          {currentIndex < questions.length - 1 && (
            <button className="next-btn" onClick={nextQuestion}>
              
              <dotlottie-player
                src="https://lottie.host/a415e5f3-527b-4ad5-bf6f-7b93559e743d/tWAiQABY1C.json"
                speed="1"
                style={{ width: '100px', height: '80px' }}
                loop
                autoplay
              ></dotlottie-player>
            </button>
          )}
          {currentIndex === questions.length - 1 && (
            <button className="finish-btn" onClick={finishQuiz}>
              Finish Quiz
            </button>
          )}
        </div>
      )}

      {showScore && (
        <div className="score-container">
          <dotlottie-player src="https://lottie.host/5177238d-2af4-422d-a373-55bbd98b5d56/Y5RkxSsbJC.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} loop autoplay></dotlottie-player >
          <h2 className='score'>You scored <br /> {score} / {questions.length}</h2>
          <button className="reset-btn" onClick={resetQuiz}>
            Try Again
          </button>
          
        </div>
      )}
    </div>
  );
}

export default App;
