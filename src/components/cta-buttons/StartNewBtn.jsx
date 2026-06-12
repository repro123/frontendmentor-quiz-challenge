import Button from "@/components/ui/Button";
import { useQuiz } from "@/hooks/useQuiz";
import { useNavigate } from "react-router";

function StartNewBtn() {
  const { resetQuiz } = useQuiz();
  const navigate = useNavigate();
  function handleNewQuiz() {
    resetQuiz();
    navigate("/");
  }

  return (
    <Button onClick={handleNewQuiz} variant="secondary">
      Play New Quiz
    </Button>
  );
}

export default StartNewBtn;
