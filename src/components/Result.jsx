export default function Result({ quizData, userAnswers }) {
    const score = quizData.reduce((acc, curr, idx) => {
      return acc + (curr.correctAnswer === userAnswers[idx] ? 1 : 0);
    }, 0);
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <p className="mb-4 text-lg">Your score: {score} / {quizData.length}</p>
        {quizData.map((q, i) => (
          <div key={i} className="mb-4 p-3 border rounded bg-gray-50">
            <p className="font-medium">{q.question}</p>
            <p className="text-sm">Your answer: <span className={q.correctAnswer === userAnswers[i] ? 'text-green-600' : 'text-red-600'}>{userAnswers[i]}</span></p>
            <p className="text-sm">Correct answer: <span className="text-green-700">{q.correctAnswer}</span></p>
          </div>
        ))}
      </div>
    );
  }
  