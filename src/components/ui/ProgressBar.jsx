import { useQuiz } from "@/hooks/useQuiz";

function ProgressBar() {
  const { currentIndex, totalQuestions } = useQuiz();

  const percentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="w-full bg-card-background rounded-full p-0.5 mt-8 lg:mt-12">
      <div
        className="h-1 bg-purple-500 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={currentIndex + 1}
        aria-valuemin={0}
        aria-valuemax={totalQuestions}
        aria-label="Questions Progress"
      />
    </div>
  );
}

// function ProgressBar() {
//   const { currentIndex, totalQuestions } = useQuiz();
//   console.log(currentIndex, totalQuestions);
//   return (
//     <div>
//       <label className="sr-only" htmlFor="progress">
//         Questions Progress
//       </label>
//       <progress
//         id="progress"
//         max={totalQuestions}
//         value={currentIndex + 1}
//         className="w-full"
//       >
//         {((currentIndex + 1) / totalQuestions) * 100}
//       </progress>
//     </div>
//   );
// }

export default ProgressBar;
