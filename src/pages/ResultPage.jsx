import AppContainer from "@/components/containers/AppContainer";
import StartNewBtn from "@/components/cta-buttons/StartNewBtn";
import TryAgainBtn from "@/components/cta-buttons/TryAgainBtn";
import QuizLogo from "@/components/ui/QuizLogo";
import { useQuiz } from "@/hooks/useQuiz";

function ResultPage() {
  const { currentQuiz, score, totalQuestions, ...x } = useQuiz();
  console.log("RESULTPAGE:", x);

  if (!currentQuiz) {
    return (
      <AppContainer>
        <h1 className="preset-2-light-mobile md:preset-2-light">
          No Quiz Selected
        </h1>
        <StartNewBtn />
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <div>
        <h1 className="preset-2-light-mobile md:preset-2-light">
          Quiz Completed
        </h1>
        <p className="preset-2-medium-mobile md:preset-2-medium">
          You scored...
        </p>
      </div>

      <div className="w-full grid gap-4">
        <div className="w-full aspect-video bg-card-background text-card-foreground rounded-2xl p-6 flex flex-col items-center gap-6">
          <QuizLogo quiz={currentQuiz} />
          <p className="flex flex-col text-center gap-6 mt-auto">
            <span className="preset-1-mobile md:preset-1">{score}</span>{" "}
            <span>out of {totalQuestions}</span>
          </p>
        </div>

        <TryAgainBtn />
        <StartNewBtn />
      </div>
    </AppContainer>
  );
}

export default ResultPage;
