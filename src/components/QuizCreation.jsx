import { useState } from "react";

export default function QuizCreation({ onStartQuiz }) {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleOptionChange = (value, index) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const addQuestion = () => {
    if (question && options.every(o => o) && correctAnswer) {
      setQuestions([
        ...questions,
        { question, options, correctAnswer }
      ]);
      setQuestion("");
      setOptions(["", "", "", ""]);
      setCorrectAnswer("");
    }
  };

  const startQuiz = () => {
    if (questions.length > 0) {
      onStartQuiz(questions);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Your Quiz</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-2"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((opt, index) => (
        <input
          key={index}
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder={`Option ${index + 1}`}
          value={opt}
          onChange={(e) => handleOptionChange(e.target.value, index)}
        />
      ))}
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Correct Answer"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />
      <div className="flex gap-4">
        <button
          onClick={addQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
        <button
          onClick={startQuiz}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start Quiz ({questions.length})
        </button>
      </div>
    </div>
  );
}
