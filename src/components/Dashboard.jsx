import { Link } from 'react-router-dom';
import useQuestions from '../hooks/useQuestions';

const Dashboard = () => {
  const { questions, loading } = useQuestions();

  if (loading) return <p>Loading questions...</p>;

  return (
    <div className="container">
      <h1>🚀 All Coding Problems</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.ID}>
            <Link to={`/problem/${q.ID}`}>{q.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
