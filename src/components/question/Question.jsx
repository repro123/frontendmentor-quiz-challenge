import Loader from "@/components/ui/Loader";
import { useQuiz } from "@/hooks/useQuiz";

function Question() {
  const { currentQuiz, currentIndex, loading } = useQuiz();

  if (loading || !currentQuiz) return <Loader />;

  const question = currentQuiz.questions[currentIndex].question;

  return (
    <>
      <p className="preset-3-mobile md:preset-3 text-question-number mt-6">
        {question}
      </p>
    </>
  );
}

export default Question;
