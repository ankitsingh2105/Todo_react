import "./styles.css";
import Ank from "./Ank";
import { useState, useRef, useEffect } from "react";
export default function App() {
  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("notes")) ?? []
  );
  let newIndex;
  useEffect(() => {
    one.current.value = "";
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
        return index !== e.index - 1;
      });
    });
  };
  const editing = (e) => {
    newIndex = e.index;
    console.log("haloo->  ", e);
    let newvalue;
    array.map((e1, index) => {
      if (index + 1 === e.index) {
        newvalue = e1;
      }
      return e1;
    });
    console.log("newArray -< ", newvalue);
    one.current.value = newvalue;
  };
  const save = () => {
    let info = one.current.value;
    console.log(newIndex, " and ", info);
    console.log("this si array element -> ", array[newIndex - 1]);
    array[newIndex - 1] = info;
    if (newIndex !== undefined) {
      setArray((e) => {
        let temp = [...e];
        temp[newIndex - 1] = info;
        return temp;
      });
    }
  };
  const one = useRef(null);
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div className="align">
          <input ref={one} />{" "}
          <button onClick={save} className="save">
            Save
          </button>
          <br />
          <br />
          <button onClick={Add}>Add</button>
        </div>
        <div className="align">
          {array.map((e, index) => {
            return (
              <Ank
                key={index}
                edit={editing}
                onSelect={deleting}
                index={index + 1}
                name={e}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
