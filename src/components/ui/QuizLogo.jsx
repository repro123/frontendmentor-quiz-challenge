function QuizLogo({ quiz }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`${quiz.bg} grid place-items-center p-1 rounded-md`}>
        <img src={quiz.icon} alt={quiz.title} className="size-4" />
      </span>
      <span className="preset-4-medium-mobile md:preset-4-medium">
        {quiz.title}
      </span>
    </div>
  );
}

export default QuizLogo;
