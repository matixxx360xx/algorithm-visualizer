import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { quickSort } from "./quickSort.js";
import "./style.css";

export default function QuickSort() {
  const navigate = useNavigate();
  const [currentArray, setCurrentArray] = useState([12, 7, 3, 15, 9, 1, 10, 4, 8, 6]);
  const [isSorting, setIsSorting] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function HandleReset() {
    setCurrentArray([12, 7, 3, 15, 9, 1, 10, 4, 8, 6]);
  }

  async function HandleSort() {
    if (isSorting) return;
    setIsSorting(true);

    const result = quickSort([...currentArray]);

    for (let i = 0; i < result.length; i++) {
      setCurrentArray([...result[i]]);
      await sleep(500);
    }
    
    setIsSorting(false);
  }

  return (
    <div className="visualizer-container">
      <h1>Quick Sort Visualizer</h1>

      <div className="array-display">
        Tablica: [ {currentArray.join(", ")} ]
      </div>
      <div className="bar-container">
        <div className="bars-header">
          <div className="dots-group">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <span className="algorithm-name">quickSort.js</span>
        </div>

        <div className="bars-wrapper">
          {currentArray.map((value, index) => (
            <div key={index} className="bar" style={{ height: `${value * 15}px` }}>
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button className="btn-primary" onClick={HandleSort} disabled={isSorting}>
          Uruchom sortowanie
        </button>
        <button className="btn-secondary" onClick={HandleReset} disabled={isSorting}>
          Resetuj
        </button>
        <button className="btn-outline" onClick={() => navigate("/")}>
          Cofnij
        </button>
      </div>
    </div>
  );
}