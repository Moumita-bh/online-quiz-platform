import { useState, useEffect } from "react";

export default function QuizTaking({ quizData, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(30);

  const question = quizData[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          nextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [current]);

  const nextQuestion = () => {
    setAnswers([...answers, selected]);
    setSelected("");
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
      setTimer(30);
    } else {
      onFinish([...answers, selected]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Question {current + 1}/{quizData.length}
      </h2>
      <p className="mb-2 font-medium">{question.question}</p>
      <div className="mb-4">
        {question.options.map((opt, i) => (
          <label key={i} className="block">
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={(e) => setSelected(e.target.value)}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Time Left: {timer}s</p>
        <button
          onClick={nextQuestion}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={!selected}
        >
          {current + 1 < quizData.length ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
}
