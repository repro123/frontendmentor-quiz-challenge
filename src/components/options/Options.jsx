import { useQuiz } from "@/hooks/useQuiz";
import OptionsList from "@/components/options/OptionsList";

function Options() {
  const {
    currentIndex,
    currentQuiz,
    handleSelection,
    selectedAnswer,
    hasSubmitted,
    ...x
  } = useQuiz();
  console.log(x);
  console.log(currentQuiz);

  const options = currentQuiz.questions[currentIndex].options;
  const correctAnswer = currentQuiz.questions[currentIndex].answer;

  return (
    <fieldset className="w-full">
      <legend className="sr-only">Choose an answer</legend>
      <div className="w-full grid gap-4">
        {options.map((option, i) => (
          <OptionsList
            key={option}
            option={option}
            index={i}
            handleSelection={handleSelection}
            selectedAnswer={selectedAnswer}
            hasSubmitted={hasSubmitted}
            correctAnswer={correctAnswer}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default Options;
