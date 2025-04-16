import { useState } from "react";
import QuizCreation from "./components/QuizCreation";
import QuizTaking from "./components/QuizTaking";
import Result from "./components/Result";

function App() {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleStartQuiz = (data) => {
    setQuizData(data);
    setIsQuizStarted(true);
  };

  const handleFinishQuiz = (answers) => {
    setUserAnswers(answers);
    setIsQuizFinished(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6">
        {!isQuizStarted ? (
          <QuizCreation onStartQuiz={handleStartQuiz} />
        ) : !isQuizFinished ? (
          <QuizTaking quizData={quizData} onFinish={handleFinishQuiz} />
        ) : (
          <Result quizData={quizData} userAnswers={userAnswers} />
        )}
      </div>
    </div>
  );
}

export default App;
