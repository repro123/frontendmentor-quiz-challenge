import ThemeToggle from "@/components/theme-toggle/ThemeToggle";
import { useQuiz } from "@/hooks/useQuiz";
import { useParams } from "react-router";

function Header() {
  const { quizData } = useQuiz();
  const { subject } = useParams();

  const currentQuiz = subject
    ? quizData?.find((q) => q.title.toLowerCase() === subject.toLowerCase())
    : null;

  return (
    <header className="w-full flex items-center gap-4 justify-between">
      {currentQuiz ? (
        <div className="flex items-center gap-2">
          <span
            className={`${currentQuiz.bg} grid place-items-center p-1 rounded-md`}
          >
            <img
              src={currentQuiz.icon}
              alt={currentQuiz.title}
              className="size-4"
            />
          </span>
          <span className="preset-4-medium-mobile md:preset-4-medium">
            {currentQuiz.title}
          </span>
        </div>
      ) : (
        <div></div>
      )}

      <ThemeToggle />
    </header>
  );
}

export default Header;
