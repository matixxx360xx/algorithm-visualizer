import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { bubbleSort } from "./bubbleSort.js";
import "./bubbleSort.css";

export default function BubbleSort() {
  const navigate = useNavigate();

  const [currentArray, setCurrentArray] = useState([5, 3, 8, 1, 2]);
  const [isSorting, setIsSorting] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function HandleReset(){
    setCurrentArray([5, 3, 8, 1, 2]);
  }

  async function HandleSort() {
    if (isSorting) {
      return;
    }

    setIsSorting(true);

    const result = bubbleSort([...currentArray]);

    for (let i = 0; i < result.length; i++) {
      setCurrentArray([...result[i]]);
      await sleep(500);
    }

    setIsSorting(false);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bubble Sort Visualizer</h1>

      <p>
        Tablica wejściowa: [ {currentArray.join(", ")} ]
      </p>

      {/* WIZUALIZACJA */}
      <div style={{ marginTop: "20px" }}>
        <h2>Wizualizacja:</h2>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "200px" }}>
          {currentArray.map((value, index) => (
            <div key={index} className="bar" style={{ height: value * 20 + "px", width: "20px", backgroundColor: "blue", transition: "height 0.3s ease" }}>
              {value}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={HandleSort} disabled={isSorting}>
          Uruchom sortowanie
        </button>
        <button onClick={() => HandleReset()} disabled={isSorting}>
          Resetuj
        </button>
        <button onClick={() => navigate("/")}>
          Cofnij
        </button>
      </div>
    </div>
  );
}