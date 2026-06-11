import AppContainer from "@/components/containers/AppContainer";
import NumQuestions from "@/components/number-of-questions/NumQuestions";
import Options from "@/components/options/Options";
import Question from "@/components/question/Question";
import SubmitBtn from "@/components/cta-buttons/SubmitBtn";
import Loader from "@/components/ui/Loader";
import ProgressBar from "@/components/ui/ProgressBar";
import { useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router";
import NextBtn from "@/components/cta-buttons/NextBtn";

function QuizPage() {
  const { subject } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    quizData,
    loading,
    startQuiz,
    currentIndex,
    currentQuiz,
    hasSubmitted,
  } = useQuiz();

  const quizFromURL =
    !loading &&
    quizData.find((quiz) => quiz.title.toLowerCase() === subject.toLowerCase());

  useEffect(() => {
    if (quizFromURL) {
      startQuiz(quizFromURL);
    }
  }, [startQuiz, loading, quizFromURL]);

  useEffect(() => {
    if (currentQuiz) {
      setSearchParams({ q: currentIndex + 1 });
    }
  }, [setSearchParams, currentIndex, currentQuiz]);

  if (loading || !currentQuiz) return <Loader />;

  return (
    <AppContainer>
      <div>
        <NumQuestions />
        <Question />
        <ProgressBar />
      </div>

      <div className="grid gap-8">
        <Options />
        {hasSubmitted ? <NextBtn /> : <SubmitBtn />}
      </div>
    </AppContainer>
  );
}

export default QuizPage;
