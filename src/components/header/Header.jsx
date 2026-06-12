import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import QuizLogo from "@/components/ui/QuizLogo";
import { useQuiz } from "@/hooks/useQuiz";
import { useParams } from "react-router";

function Header() {
  const { quizData, currentQuiz } = useQuiz();
  const { subject } = useParams();

  const quizFromURL = subject
    ? quizData?.find((q) => q.title.toLowerCase() === subject.toLowerCase())
    : null;

  const quiz = quizFromURL || currentQuiz;

  return (
    <header className="w-full flex items-center gap-4 justify-between">
      {quiz ? <QuizLogo quiz={quiz} /> : <div></div>}

      <ThemeToggle />
    </header>
  );
}

export default Header;
