import { useQuiz } from "@/hooks/useQuiz";

function NumQuestions() {
  const { currentIndex, totalQuestions } = useQuiz();

  return (
    <p className="preset-5-mobile md:preset-6 text-question-number">
      Question {currentIndex + 1} of {totalQuestions}
    </p>
  );
}

export default NumQuestions;
