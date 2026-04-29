import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const algorithms = [
    { id: "bubbleSort", name: "Bubble Sort", desc: "Compare adjacent elements", time: "O(n²)", space: "O(1)" },
    { id: "quick", name: "Quick Sort", desc: "Divide and conquer strategy", time: "O(n log n)", space: "O(log n)" },
    { id: "merge", name: "Merge Sort", desc: "Split, sort and merge", time: "O(n log n)", space: "O(n)" },
    { id: "insertion", name: "Insertion Sort", desc: "Build sorted array step by step", time: "O(n²)", space: "O(1)" },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>SORT<span>.algo</span></h1>
        <p>Interactive sorting visualizer</p>
      </header>

      <div className="container">
        <h2>Choose algorithm</h2>

        <div className="grid">
          {algorithms.map((a) => (
            <div
              key={a.id}
              className="card"
              onClick={() => navigate(`/algorithms/${a.id}`)}
            >
              <h3>{a.name}</h3>
              <p>{a.desc}</p>

              <div className="meta">
                <span>{a.time}</span>
                <span>{a.space}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;