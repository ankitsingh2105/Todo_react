import "./styles.css";
import { useState, useRef, useEffect } from "react";
export default function App() {
  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("notes")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(array));
  }, [array]);
  const Add = () => {
    setArray((e) => {
      return [...e, one.current.value];
    });
  };
  const one = useRef(null);
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div className="align">
          <input ref={one} />
          <br />
          <br />
          <button onClick={Add}>Add</button>
        </div>
        <div className="align">
          {array.map((e, index) => {
            return (
              <div key={index} index={index + 1} name={e}>
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
