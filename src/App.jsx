import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "@/layout/RootLayout";
import { ThemeProvider } from "@/context/ThemeProvider";
import StartMenu from "@/pages/StartMenu";
import { QuizProvider } from "@/context/QuizProvider";
import QuizPage from "@/pages/QuizPage";
import ResultPage from "@/pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <QuizProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<StartMenu />} />
              <Route path=":subject" element={<QuizPage />} />
              <Route path="/results" element={<ResultPage />} />
            </Route>
          </Routes>
        </QuizProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
