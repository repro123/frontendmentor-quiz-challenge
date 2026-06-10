import { useEffect, useState } from "react";
import { QuizContext } from "./QuizContext";

const QUIZ_META = {
  HTML: { bg: "bg-html" },
  CSS: { bg: "bg-css" },
  JavaScript: { bg: "bg-js" },
  Accessibility: { bg: "bg-accessibility" },
};

export function QuizProvider({ children }) {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <QuizContext.Provider value={{ quizData, loading }}>
      {children}
    </QuizContext.Provider>
  );
}
