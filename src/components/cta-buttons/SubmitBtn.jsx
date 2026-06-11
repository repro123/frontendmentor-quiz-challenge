import Button from "@/components/ui/Button";
import { useQuiz } from "@/hooks/useQuiz";

function SubmitBtn() {
  const { selectedAnswer, handleAnswer, hasSubmitted } = useQuiz();

  return (
    <Button
      disabled={hasSubmitted || !selectedAnswer}
      onClick={() => handleAnswer(selectedAnswer)}
    >
      Submit Answer
    </Button>
  );
}

export default SubmitBtn;
