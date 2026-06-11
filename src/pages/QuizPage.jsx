import AppContainer from "@/components/containers/AppContainer";
import NumQuestions from "@/components/number-of-questions/NumQuestions";
import Question from "@/components/question/Question";
import Loader from "@/components/ui/Loader";
import ProgressBar from "@/components/ui/ProgressBar";
import { useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";
import { useParams } from "react-router";

function QuizPage() {
  const { subject } = useParams();
  const { quizData, loading, startQuiz, currentQuiz } = useQuiz();

  const quizFromURL =
    !loading &&
    quizData.find((quiz) => quiz.title.toLowerCase() === subject.toLowerCase());

  useEffect(() => {
    if (quizFromURL) {
      startQuiz(quizFromURL);
    }
  }, [loading, quizFromURL]);

  console.log("QURL", quizFromURL);

  if (loading || !currentQuiz) return <Loader />;

  return (
    <AppContainer>
      <div>
        <NumQuestions />
        <Question />
        <ProgressBar />
      </div>

      <div></div>
    </AppContainer>
  );
}

export default QuizPage;
