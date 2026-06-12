import { useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";
import { useCallback } from "react";

const QUIZ_META = {
  HTML: { bg: "bg-html" },
  CSS: { bg: "bg-css" },
  JavaScript: { bg: "bg-js" },
  Accessibility: { bg: "bg-accessibility" },
};

export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const quiz = data.quizzes.map((quiz) => ({
          ...quiz,
          ...QUIZ_META[quiz.title],
        }));
        setQuizData(quiz);
        setLoading(false);
      });
  }, []);

  const totalQuestions = currentQuiz ? currentQuiz.questions.length : 0;

  function handleAnswer(answer) {
    const correct = currentQuiz.questions[currentIndex].answer;
    if (answer === correct) {
      setScore((prev) => prev + 1);
    }
    setHasSubmitted(true);
  }

  function handleSelection(option) {
    setSelectedAnswer(option);
  }

  function handleNext() {
    if (currentIndex + 1 >= currentQuiz.questions.length) {
      setIsFinished(true);
      return "finished";
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    }
  }

  // function startQuiz(quiz) {
  //   setCurrentQuiz(quiz);
  //   setCurrentIndex(0);
  //   setScore(0);
  //   setSelectedAnswer(null);
  //   setIsFinished(false);
  // }
  const startQuiz = useCallback(function (quiz) {
    console.log("startQuiz called");
    setCurrentQuiz(quiz);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setHasSubmitted(false);
  }, []);

  function resetQuiz() {
    setCurrentQuiz(null);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
  }

  return (
    <QuizContext.Provider
      value={{
        quizData,
        loading,
        currentQuiz,
        currentIndex,
        totalQuestions,
        selectedAnswer,
        hasSubmitted,
        score,
        isFinished,
        handleSelection,
        handleAnswer,
        handleNext,
        startQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
