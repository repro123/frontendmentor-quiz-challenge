import Button from "@/components/ui/Button";
import { useQuiz } from "@/hooks/useQuiz";
import { useNavigate } from "react-router";

function NextBtn() {
  const { handleNext, currentIndex, currentQuiz } = useQuiz();

  const isLastQuestion = currentIndex + 1 >= currentQuiz.questions.length;

  const navigate = useNavigate();
  function onNext() {
    const result = handleNext();
    if (result === "finished") navigate("/results");
  }

  return (
    <Button onClick={() => onNext()}>
      {isLastQuestion ? "View Result" : "Next Question"}
    </Button>
  );
}

export default NextBtn;
