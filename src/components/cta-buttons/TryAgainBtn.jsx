import Button from "@/components/ui/Button";
import { useQuiz } from "@/hooks/useQuiz";
import { useNavigate } from "react-router";

function TryAgainBtn() {
  const { currentQuiz, startQuiz } = useQuiz();
  const navigate = useNavigate();

  function handleTryAgain() {
    startQuiz(currentQuiz);
    navigate(`/${currentQuiz.title.toLowerCase()}`);
  }

  return <Button onClick={handleTryAgain}>Try Again </Button>;
}

export default TryAgainBtn;
