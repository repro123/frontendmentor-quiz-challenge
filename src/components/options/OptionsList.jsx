import correctIcon from "@/assets/images/icon-correct.svg";
import incorrectIcon from "@/assets/images/icon-incorrect.svg";
import { OPTIONS_INDICES } from "@/lib/optionsIndices";

function OptionsList({
  option,
  index,
  selectedAnswer,
  handleSelection,
  hasSubmitted,
  correctAnswer,
}) {
  const isSelected = selectedAnswer === option;
  const isCorrect = hasSubmitted && isSelected && option === correctAnswer;
  const isWrong = hasSubmitted && isSelected && option !== correctAnswer;
  const showCorrect =
    hasSubmitted &&
    !isSelected &&
    option === correctAnswer &&
    selectedAnswer !== correctAnswer;

  return (
    <label
      className={`bg-card-background text-card-foreground p-3 rounded-2xl flex gap-4 items-center border-2 transition-all duration-300 ${!hasSubmitted ? "border-transparent cursor-pointer hover:-translate-y-1  has-checked:border-primary" : "pointer-events-none"} ${hasSubmitted && isCorrect ? "border-success" : ""} ${hasSubmitted && isWrong ? "border-error" : ""} ${hasSubmitted && !isCorrect && !isWrong ? "border-transparent" : ""} relative`}
    >
      <input
        id={`${option}-${index}`}
        className="sr-only peer"
        type="radio"
        name="answer"
        value={option}
        checked={isSelected}
        onChange={() => handleSelection(option)}
      />
      <span
        className={`preset-4-medium-mobile md:preset-4-medium  p-1 rounded-md  peer-checked:text-white  ${!hasSubmitted ? "peer-checked:bg-primary bg-grey-50 text-grey-500" : ""} ${hasSubmitted && isCorrect ? "bg-success text-white" : ""} ${hasSubmitted && isWrong ? "bg-error text-white" : ""} ${hasSubmitted && !isCorrect && !isWrong ? "bg-grey-50 text-grey-500" : ""}`}
      >
        {OPTIONS_INDICES[index]}
      </span>

      <span>{option}</span>

      {hasSubmitted && (isCorrect || showCorrect) && (
        <img
          src={correctIcon}
          alt="Correct"
          className="absolute right-4 w-6 h-6"
        />
      )}
      {hasSubmitted && isWrong && (
        <img
          src={incorrectIcon}
          alt="Incorrect"
          className="absolute right-4 w-6 h-6"
        />
      )}
    </label>
  );
}

export default OptionsList;
