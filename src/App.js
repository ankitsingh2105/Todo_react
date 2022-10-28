import "./styles.css";
import Ank from "./Ank";
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
  const deleting = (e) => {
    setArray((e1) => {
      return e1.filter((e2, index) => {
        return index !== e.index - 1; // here
      });
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
              <Ank key={index} onSelect={deleting} index={index + 1} name={e} />
            );
          })}
        </div>
      </div>
    </>
  );
}
