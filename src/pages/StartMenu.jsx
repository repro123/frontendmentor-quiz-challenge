import AppContainer from "@/components/containers/AppContainer";
import Loader from "@/components/ui/Loader";
import { useQuiz } from "@/hooks/useQuiz";
import { Link } from "react-router";

function StartMenu() {
  const { quizData, loading, startQuiz, ...x } = useQuiz();
  console.log(x);

  function handleStartQuiz(quiz) {
    startQuiz(quiz);
  }

  return (
    <AppContainer>
      <div>
        <h1 className="preset-2-light-mobile md:preset-2-light">
          Welcome to the{" "}
          <span className="preset-2-medium-mobile md:preset-2-medium">
            Frontend Quiz!
          </span>
        </h1>
        <p className="preset-5-mobile md:preset-6 mt-4">
          Please select a subject to get started.
        </p>
      </div>

      {loading && <Loader />}

      {!loading && (
        <ul className=" grid gap-4 ">
          {quizData.map((data) => (
            <li
              key={data.title}
              className="bg-card-background text-card-foreground preset-4-medium-mobile md:preset-4-medium transition-all rounded-2xl shadow hover:-translate-y-1  duration-300"
            >
              <Link
                onClick={() => handleStartQuiz(data)}
                to={`${data.title.toLowerCase()}`}
                className="cursor-pointer p-4 flex items-center gap-4 w-full h-full"
              >
                {" "}
                <span
                  className={`${data.bg} p-1 rounded-md grid place-items-center`}
                >
                  <img
                    src={data.icon}
                    alt={`${data.title} icon`}
                    className="w-4 h-4 inline-block"
                  />
                </span>
                <span>{data.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AppContainer>
  );
}

export default StartMenu;
