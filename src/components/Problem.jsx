import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Problem = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/problems')
      .then((res) => {
        const found = res.data.find((p) => p.ID === id);
        setProblem(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching problem:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading problem...</p>;
  if (!problem) return <p>Problem not found</p>;

  return (
    <div className="container">
      <h2>🧠 {problem.title}</h2>
      <p>{problem.description}</p>

      <h3>📥 Test Cases</h3>
      {problem.test_cases.map((input, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p><strong>Input:</strong> {input}</p>
          <p><strong>Expected Output:</strong> {problem.output[index]}</p>
        </div>
      ))}
    </div>
  );
};

export default Problem;
